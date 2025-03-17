import React from 'react';
import { useTimetable } from '../../context/TimetableContext';

function SubjectList() {
  const { 
    selectedSubjects, 
    subjectColors, 
    showColorPicker,
    setShowColorPicker,
    collapsedSubjects,
    toggleSubjectCollapse,
    removeSubject,
    changeSubjectColor,
    colorOptions,
    selectedSessions,
    toggleSession,
    hasConflict
  } = useTimetable();

  return (
    <div>
      <h3 className="font-bold mb-2">Selected Subjects:</h3>
      {selectedSubjects.length === 0 ? (
        <p className="text-gray-500">No subjects selected</p>
      ) : (
        <div className="space-y-4">
          {selectedSubjects.map(subject => (
            <div key={subject.code} className="border p-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSubjectCollapse(subject.code)}
              >
                <div className="flex items-center">
                  <div 
                    className={`w-6 h-6 mr-2 rounded ${subjectColors[subject.code]?.selected || 'bg-gray-300'}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering collapse
                      setShowColorPicker(showColorPicker === subject.code ? null : subject.code);
                    }}
                    title="Change color"
                  ></div>
                  <h4 className="font-bold">{subject.code} - {subject.name}</h4>
                  
                  {/* Collapse/Expand indicator */}
                  <svg 
                    className={`ml-2 h-5 w-5 text-gray-500 transform transition-transform ${collapsedSubjects[subject.code] ? '' : 'rotate-90'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering collapse
                    removeSubject(subject.code);
                  }}
                  className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
              
              {/* Only show content if not collapsed */}
              {!collapsedSubjects[subject.code] && (
                <div className="mt-2">
                  {/* Color picker dropdown */}
                  {showColorPicker === subject.code && (
                    <div className="bg-white p-1 mb-3 border rounded shadow-sm inline-block">
                      <div className="text-sm font-semibold px-1 mb-1">Select color:</div>
                      <div className="grid grid-cols-3 gap-1">
                        {colorOptions.map(color => (
                          <div 
                            key={color.name}
                            className={`w-14 h-8 rounded-sm ${color.selected} cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center border`}
                            onClick={() => changeSubjectColor(subject.code, color.name)}
                            title={color.name}
                          >
                            {subjectColors[subject.code]?.name === color.name && (
                              <span className="text-gray-700 font-bold text-lg drop-shadow-sm">✓</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Component Selectors */}
                  {subject.components.map(component => (
                    <div key={`${subject.code}-${component.name}`} className="mb-3">
                      <h5 className="font-semibold border-b pb-1 mb-2">{component.name}:</h5>
                      <div className="pl-4">
                        {component.options.map(option => {
                          const firstSession = option.sessions[0];
                          const isSelected = selectedSessions[`${subject.code}-${component.name}`] === option.id;
                          
                          // Check if this option has any conflicts
                          const hasSessionConflict = option.sessions.some(session => {
                            const sessionId = `${option.id}-${session.day}-${session.startTime}`;
                            return hasConflict(sessionId);
                          });
                          
                          // Get subject color
                          const optionColor = subjectColors[subject.code] || colorOptions[0];
                          
                          // Check if this component is part of a group
                          const isPartOfGroup = subject.componentGroups?.some(group => 
                            group.components.includes(component.name));
                          
                          // Find the group information for this option (if any)
                          let optionGroupInfo = null;
                          if (isPartOfGroup) {
                            subject.componentGroups.forEach(group => {
                              if (group.components.includes(component.name)) {
                                const matchingOption = group.options.find(opt => 
                                  opt.ids.includes(option.id)
                                );
                                if (matchingOption) {
                                  optionGroupInfo = {
                                    groupType: group.groupType,
                                    groupId: matchingOption.groupId,
                                    name: matchingOption.instructorName || `Group ${matchingOption.groupId}`,
                                    relatedComponents: group.components.filter(c => c !== component.name)
                                  };
                                }
                              }
                            });
                          }
                            
                          // If auto-selected as part of a group (but not directly selected by user)
                          const isAutoSelected = isSelected && isPartOfGroup && 
                            subject.componentGroups?.some(group => {
                              if (!group.components.includes(component.name)) return false;
                              
                              // Check if another component in this group was selected by the user
                              const otherComponents = group.components.filter(c => c !== component.name);
                              return otherComponents.some(otherComponent => {
                                const otherComponentKey = `${subject.code}-${otherComponent}`;
                                const otherOptionId = selectedSessions[otherComponentKey];
                                if (!otherOptionId) return false;
                                
                                // Find which option group contains both selections
                                return group.options.some(optionGroup => 
                                  optionGroup.ids.includes(otherOptionId) && 
                                  optionGroup.ids.includes(option.id)
                                );
                              });
                            });
                          
                          return (
                            <div 
                              key={option.id} 
                              className={`flex items-center space-x-2 my-1 p-1 rounded relative ${
                                isSelected ? optionColor.selected : ''
                              }`}
                            >
                              <input 
                                type="checkbox"
                                id={option.id}
                                checked={isSelected}
                                onChange={() => toggleSession(subject.code, component.name, option.id)}
                                disabled={isAutoSelected}
                              />
                              <label htmlFor={option.id} className={`text-sm flex flex-col ${isAutoSelected ? 'italic' : ''}`}>
                                <span>{firstSession.day} {firstSession.startTime}-{firstSession.endTime}</span>
                                <span className="text-xs text-gray-600">{firstSession.location}</span>
                                <span className="text-xs text-gray-600">{firstSession.instructor}</span>
                                {optionGroupInfo && (
                                  <span className="text-xs bg-blue-100 text-blue-700 px-1 py-0.5 rounded mt-1">
                                    {optionGroupInfo.name} {optionGroupInfo.groupType === 'lecturer_group' ? '(Lecturer)' : ''}
                                  </span>
                                )}
                                {isAutoSelected && (
                                  <span className="text-xs font-semibold text-blue-600">Auto-selected</span>
                                )}
                              </label>
                              {option.sessions.length > 1 && (
                                <span className="text-xs bg-yellow-100 px-1 rounded">+{option.sessions.length - 1} more</span>
                              )}
                              
                              {/* Conflict indicators */}
                              {hasSessionConflict && (
                                <>
                                  {isSelected ? (
                                    <span className="ml-1 inline-flex items-center justify-center bg-red-500 text-white rounded-full h-4 w-4 text-xs font-bold">!</span>
                                  ) : (
                                    <span className="ml-1 inline-flex items-center justify-center bg-yellow-500 text-white rounded-full h-4 w-4 text-xs font-bold">!</span>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubjectList;