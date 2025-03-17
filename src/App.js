import React, { useState, useEffect, useRef } from 'react';
import { courseData } from './data/courseData';
import html2canvas from 'html2canvas';
import _ from 'lodash';

function App() {
  // Predefined muted color options
  const colorOptions = [
    { name: "Slate", selected: "bg-slate-300 border-slate-500", unselected: "bg-slate-200 border-slate-400", conflict: "bg-red-300 border-red-500" },
    { name: "Gray", selected: "bg-gray-300 border-gray-500", unselected: "bg-gray-200 border-gray-400", conflict: "bg-red-300 border-red-500" },
    { name: "Zinc", selected: "bg-zinc-300 border-zinc-500", unselected: "bg-zinc-200 border-zinc-400", conflict: "bg-red-300 border-red-500" },
    { name: "Stone", selected: "bg-stone-300 border-stone-500", unselected: "bg-stone-200 border-stone-400", conflict: "bg-red-300 border-red-500" },
    { name: "Red", selected: "bg-red-200 border-red-400", unselected: "bg-red-100 border-red-300", conflict: "bg-red-300 border-red-500" },
    { name: "Orange", selected: "bg-orange-200 border-orange-400", unselected: "bg-orange-100 border-orange-300", conflict: "bg-red-300 border-red-500" },
    { name: "Amber", selected: "bg-amber-200 border-amber-400", unselected: "bg-amber-100 border-amber-300", conflict: "bg-red-300 border-red-500" },
    { name: "Yellow", selected: "bg-yellow-200 border-yellow-400", unselected: "bg-yellow-100 border-yellow-300", conflict: "bg-red-300 border-red-500" },
    { name: "Lime", selected: "bg-lime-200 border-lime-400", unselected: "bg-lime-100 border-lime-300", conflict: "bg-red-300 border-red-500" },
    { name: "Green", selected: "bg-green-200 border-green-400", unselected: "bg-green-100 border-green-300", conflict: "bg-red-300 border-red-500" },
    { name: "Emerald", selected: "bg-emerald-200 border-emerald-400", unselected: "bg-emerald-100 border-emerald-300", conflict: "bg-red-300 border-red-500" },
    { name: "Teal", selected: "bg-teal-200 border-teal-400", unselected: "bg-teal-100 border-teal-300", conflict: "bg-red-300 border-red-500" },
    { name: "Cyan", selected: "bg-cyan-200 border-cyan-400", unselected: "bg-cyan-100 border-cyan-300", conflict: "bg-red-300 border-red-500" },
    { name: "Sky", selected: "bg-sky-200 border-sky-400", unselected: "bg-sky-100 border-sky-300", conflict: "bg-red-300 border-red-500" },
    { name: "Blue", selected: "bg-blue-200 border-blue-400", unselected: "bg-blue-100 border-blue-300", conflict: "bg-red-300 border-red-500" },
    { name: "Indigo", selected: "bg-indigo-200 border-indigo-400", unselected: "bg-indigo-100 border-indigo-300", conflict: "bg-red-300 border-red-500" },
    { name: "Violet", selected: "bg-violet-200 border-violet-400", unselected: "bg-violet-100 border-violet-300", conflict: "bg-red-300 border-red-500" },
    { name: "Purple", selected: "bg-purple-200 border-purple-400", unselected: "bg-purple-100 border-purple-300", conflict: "bg-red-300 border-red-500" },
    { name: "Fuchsia", selected: "bg-fuchsia-200 border-fuchsia-400", unselected: "bg-fuchsia-100 border-fuchsia-300", conflict: "bg-red-300 border-red-500" },
    { name: "Pink", selected: "bg-pink-200 border-pink-400", unselected: "bg-pink-100 border-pink-300", conflict: "bg-red-300 border-red-500" },
    { name: "Rose", selected: "bg-rose-200 border-rose-400", unselected: "bg-rose-100 border-rose-300", conflict: "bg-red-300 border-red-500" }
  ];

  // State for selected subjects and sessions
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSessions, setSelectedSessions] = useState({});
  const [subjectColors, setSubjectColors] = useState({});
  const [showColorPicker, setShowColorPicker] = useState(null);
  const [conflicts, setConflicts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  // For storing collapsed state of subject panels
  const [collapsedSubjects, setCollapsedSubjects] = useState({});
  const fileInputRef = useRef(null);
  const timetableRef = useRef(null);
  
  // Toggle collapsed state for a subject
  const toggleSubjectCollapse = (subjectCode) => {
    setCollapsedSubjects(prev => ({
      ...prev,
      [subjectCode]: !prev[subjectCode]
    }));
  };

  // Get available subjects (those not already selected)
  const availableSubjects = courseData.subjects
    .filter(subject => !selectedSubjects.find(s => s.code === subject.code))
    .filter(subject => 
      searchTerm === '' || 
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Add a subject to the selection with a random color
  const addSubject = (subjectCode) => {
    const subject = courseData.subjects.find(s => s.code === subjectCode);
    if (subject) {
      // Assign a random color from color options
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      const randomColor = colorOptions[randomIndex];
      
      setSelectedSubjects([...selectedSubjects, subject]);
      setSubjectColors(prev => ({
        ...prev,
        [subjectCode]: randomColor
      }));
    }
  };
  
  // Change the color of a subject
  const changeSubjectColor = (subjectCode, colorName) => {
    const selectedColor = colorOptions.find(color => color.name === colorName);
    if (selectedColor) {
      setSubjectColors(prev => ({
        ...prev,
        [subjectCode]: selectedColor
      }));
      setShowColorPicker(null);
    }
  };

  // Remove a subject from the selection
  const removeSubject = (subjectCode) => {
    setSelectedSubjects(selectedSubjects.filter(s => s.code !== subjectCode));
    
    // Clear selected sessions for this subject
    const newSelectedSessions = {...selectedSessions};
    Object.keys(newSelectedSessions).forEach(key => {
      if (key.startsWith(subjectCode)) {
        delete newSelectedSessions[key];
      }
    });
    setSelectedSessions(newSelectedSessions);
    
    // Remove the subject color
    const newSubjectColors = {...subjectColors};
    delete newSubjectColors[subjectCode];
    setSubjectColors(newSubjectColors);
  };

  // Find related components that should be selected together based on component groups
  const findGroupedComponents = (subject, componentName, optionId) => {
    // If subject has no component groups, return empty object
    if (!subject.componentGroups) return {};
    
    const relatedSelections = {};
    
    // Find all component groups that include this component
    subject.componentGroups.forEach(group => {
      if (group.components.includes(componentName)) {
        // Find which option group contains the selected option
        const matchingOption = group.options.find(option => 
          option.ids.includes(optionId)
        );
        
        if (matchingOption) {
          console.log(`Found matching option group (${matchingOption.groupId}) for ${optionId}`);
          
          // Identify the position of this option in the ids array
          const selectedIdIndex = matchingOption.ids.indexOf(optionId);
          
          // For each component in this group, set the corresponding option by using the same index
          group.components.forEach((groupComponent, componentIndex) => {
            if (groupComponent !== componentName) { // Skip the originally selected component
              // Get the matching optionId for this component (same position in ids array)
              const relatedOptionId = matchingOption.ids[componentIndex];
              
              if (relatedOptionId) {
                console.log(`Auto-selecting ${relatedOptionId} for ${groupComponent}`);
                relatedSelections[`${subject.code}-${groupComponent}`] = relatedOptionId;
              }
            }
          });
        }
      }
    });
    
    console.log("Final related selections:", relatedSelections);
    return relatedSelections;
  };

  // Select or unselect a session option for a component
  const toggleSession = (subjectCode, componentName, optionId) => {
    console.log(`toggleSession: ${subjectCode}, ${componentName}, ${optionId}`);
    const sessionKey = `${subjectCode}-${componentName}`;
    const isCurrentlySelected = selectedSessions[sessionKey] === optionId;
    
    // Create a copy of current selections
    const newSelectedSessions = { ...selectedSessions };
    
    if (isCurrentlySelected) {
      // If this option is already selected, unselect it
      delete newSelectedSessions[sessionKey];
      
      // Also unselect any related components that were auto-selected
      const subject = selectedSubjects.find(s => s.code === subjectCode);
      if (subject && subject.componentGroups) {
        subject.componentGroups.forEach(group => {
          if (group.components.includes(componentName)) {
            group.components.forEach(groupComponent => {
              if (groupComponent !== componentName) {
                const groupComponentKey = `${subjectCode}-${groupComponent}`;
                delete newSelectedSessions[groupComponentKey];
              }
            });
          }
        });
      }
    } else {
      // If this option is not selected, select it and make any previous selection for this component unselected
      newSelectedSessions[sessionKey] = optionId;
      
      // Find related components that should be selected together
      const subject = selectedSubjects.find(s => s.code === subjectCode);
      if (subject) {
        console.log("Found subject:", subject.code);
        if (subject.componentGroups) {
          console.log("Subject has component groups:", subject.componentGroups);
        }
        
        const relatedSelections = findGroupedComponents(subject, componentName, optionId);
        console.log("Related selections found:", relatedSelections);
        
        // Add related selections to our selections object
        Object.assign(newSelectedSessions, relatedSelections);
      }
    }
    
    // Update the state
    setSelectedSessions(newSelectedSessions);
    
    // Check for conflicts
    detectConflicts(newSelectedSessions);
  };

  // Check for time conflicts between selected sessions
  const detectConflicts = (selections) => {
    const sessions = [];
    
    // Get all sessions from selections
    Object.entries(selections).forEach(([key, optionId]) => {
      const [subjectCode, componentName] = key.split('-');
      const subject = selectedSubjects.find(s => s.code === subjectCode);
      if (!subject) return;
      
      const component = subject.components.find(c => c.name === componentName);
      if (!component) return;
      
      const option = component.options.find(o => o.id === optionId);
      if (!option) return;
      
      option.sessions.forEach(session => {
        sessions.push({
          id: `${optionId}-${session.day}-${session.startTime}`,
          subjectCode,
          day: session.day,
          startTime: session.startTime,
          endTime: session.endTime,
          ...session
        });
      });
    });
    
    // Detect conflicts
    const newConflicts = [];
    for (let i = 0; i < sessions.length; i++) {
      for (let j = i + 1; j < sessions.length; j++) {
        const sessionA = sessions[i];
        const sessionB = sessions[j];
        
        if (sessionA.day === sessionB.day) {
          // Check for time overlap
          const startA = timeToMinutes(sessionA.startTime);
          const endA = timeToMinutes(sessionA.endTime);
          const startB = timeToMinutes(sessionB.startTime);
          const endB = timeToMinutes(sessionB.endTime);
          
          if ((startA <= startB && endA > startB) || 
              (startB <= startA && endB > startA)) {
            newConflicts.push([sessionA.id, sessionB.id]);
          }
        }
      }
    }
    
    setConflicts(newConflicts);
  };

  // Helper function to convert time to minutes for comparison
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Get all sessions to display in the timetable
  const getAllSessions = () => {
    // Array to store all sessions
    const allSessions = [];
    
    // Collect sessions, but skip unselected options when there's a selected option for that component
    selectedSubjects.forEach(subject => {
      subject.components.forEach(component => {
        // Check if any option is already selected for this component
        const componentKey = `${subject.code}-${component.name}`;
        const hasSelectedOption = selectedSessions[componentKey] !== undefined;
        
        component.options.forEach(option => {
          const isSelected = selectedSessions[componentKey] === option.id;
          
          // Only include this option if it's selected OR if no option has been selected for this component
          if (isSelected || !hasSelectedOption) {
            option.sessions.forEach(session => {
              allSessions.push({
                id: `${option.id}-${session.day}-${session.startTime}`,
                subjectCode: subject.code,
                componentName: component.name,
                optionId: option.id,
                selected: isSelected,
                day: session.day,
                startTime: session.startTime,
                endTime: session.endTime,
                location: session.location,
                instructor: session.instructor,
                type: session.type
              });
            });
          }
        });
      });
    });
    
    // Group all sessions by day and time slot to find overlaps
    // We'll create a map of day -> time slot -> sessions
    const timeOverlapsByDay = {};
    
    // Initialize for each day
    days.forEach(day => {
      timeOverlapsByDay[day] = {};
    });
    
    // Process each session to find time-based overlaps
    allSessions.forEach(session => {
      const day = session.day;
      const start = timeToMinutes(session.startTime);
      const end = timeToMinutes(session.endTime);
      
      // Create time slots for every 15 minutes
      for (let time = start; time < end; time += 15) {
        const timeKey = `${time}`; // Use minutes as key
        
        if (!timeOverlapsByDay[day][timeKey]) {
          timeOverlapsByDay[day][timeKey] = [];
        }
        
        // Add this session to this time slot
        timeOverlapsByDay[day][timeKey].push(session);
      }
    });
    
    // Now process each session to mark overlaps and assign positions
    allSessions.forEach(session => {
      const day = session.day;
      const start = timeToMinutes(session.startTime);
      const end = timeToMinutes(session.endTime);
      
      // Find all sessions that overlap with this one at any point
      const overlappingSessions = new Set();
      
      // Check each time slot this session occupies
      for (let time = start; time < end; time += 15) {
        const timeKey = `${time}`;
        const sessionsInSlot = timeOverlapsByDay[day][timeKey] || [];
        
        // Add all other sessions in this slot to the overlapping set
        sessionsInSlot.forEach(otherSession => {
          if (otherSession.id !== session.id) {
            overlappingSessions.add(otherSession.id);
          }
        });
      }
      
      // Convert to array for easier processing
      const overlaps = Array.from(overlappingSessions);
      
      if (overlaps.length > 0) {
        // This session overlaps with others
        
        // Create an overlap group with this session and all overlapping sessions
        const overlapGroup = [
          session.id, 
          ...overlaps
        ];
        
        // Use session IDs to create a stable, sortable group
        overlapGroup.sort();
        
        // Find this session's position in the sorted group
        const position = overlapGroup.indexOf(session.id);
        
        // Set overlap properties
        session.hasOverlap = true;
        session.overlapCount = overlapGroup.length;
        session.overlapIndex = position;
        
        // If this session is selected, or any of its overlapping sessions are selected,
        // mark it as a conflict for visual indication
        const hasSelectedOverlap = allSessions.some(s => 
          overlaps.includes(s.id) && s.selected);
          
        session.potentialConflict = session.selected || hasSelectedOverlap;
      } else {
        // No overlaps
        session.hasOverlap = false;
        session.overlapCount = 1;
        session.overlapIndex = 0;
        session.potentialConflict = false;
      }
    });
    
    return allSessions;
  };
  
  // Ensure timetable measurements are updated when window resizes
  useEffect(() => {
    const handleResize = () => {
      // Force a re-render to recalculate positions
      setSelectedSubjects([...selectedSubjects]);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedSubjects]);

  // Check if a session has a conflict
  const hasConflict = (sessionId) => {
    return conflicts.some(conflict => 
      conflict[0] === sessionId || conflict[1] === sessionId
    );
  };

  // Export timetable as image
  const exportImage = () => {
    if (!timetableRef.current) return;
    
    if (selectedSubjects.length === 0) {
      showNotification('Please select at least one subject before exporting', 'warning');
      return;
    }
    
    html2canvas(timetableRef.current).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'timetable.png';
      link.click();
      
      showNotification('Timetable exported as image successfully!', 'success');
    });
  };
  
  // Show notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Get calendar time slots
  const timeSlots = [];
  for (let hour = 8; hour < 21; hour++) {
    for (let minute of [0, 30]) {
      if (hour === 8 && minute === 0) continue; // Start at 8:30
      if (hour === 20 && minute === 30) continue; // End at 20:30
      
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  }
  
  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Calculate session position and height in the timetable grid
  const getSessionStyle = (session) => {
    const startMinutes = timeToMinutes(session.startTime);
    const endMinutes = timeToMinutes(session.endTime);
    const duration = endMinutes - startMinutes;
    
    // 8:30 starts at 0
    const startFromFirstSlot = startMinutes - timeToMinutes('08:30');
    
    // Each 30 minutes is 60px high
    const top = (startFromFirstSlot / 30) * 60;
    const height = (duration / 30) * 60;
    
    return {
      top: `${top}px`,
      height: `${height}px`
    };
  };

  // Determine session card color based on subject and selection status
  const getSessionColor = (session) => {
    // Always use the subject's color - don't change for conflicts
    const subjectColor = subjectColors[session.subjectCode] || colorOptions[0];
    
    // Use subject-specific colors rather than warning colors
    if (session.selected) {
      return subjectColor.selected; // Selected sessions use vibrant color
    } else {
      return subjectColor.unselected; // Unselected sessions use muted color
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 p-3 rounded shadow-lg z-50 ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
          notification.type === 'warning' ? 'bg-yellow-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}
      
      {/* Header */}
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">UOWD Timetable Scheduler</h1>
          <div className="flex justify-center">
            <button 
              onClick={exportImage}
              className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-50"
              disabled={isLoading}
            >
              Export as Image
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        {/* Subject Selection Panel */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Subject Selection</h2>
          
          {/* Search and Add Subject */}
          <div className="mb-4">
            <label className="block mb-2">Search Subjects:</label>
            <div className="flex mb-2">
              <input 
                type="text" 
                className="flex-grow p-2 border rounded-l"
                placeholder="Search by code or name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="bg-gray-200 px-3 rounded-r border-t border-r border-b"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            </div>
            
            <div className="max-h-60 overflow-y-auto border rounded">
              {availableSubjects.length === 0 ? (
                <p className="p-2 text-gray-500">No subjects found</p>
              ) : (
                availableSubjects.map(subject => (
                  <div 
                    key={subject.code} 
                    className="p-2 hover:bg-blue-50 cursor-pointer border-b flex justify-between items-center"
                    onClick={() => addSubject(subject.code)}
                  >
                    <div>
                      <div className="font-bold">{subject.code}</div>
                      <div className="text-sm">{subject.name}</div>
                    </div>
                    <button className="text-blue-600 text-sm">Add</button>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Selected Subjects */}
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
                          <div className="bg-white p-2 mb-3 border rounded shadow-sm">
                            <div className="text-sm font-semibold mb-2">Select color:</div>
                            <div className="grid grid-cols-6 gap-1">
                              {colorOptions.map(color => (
                                <div 
                                  key={color.name}
                                  className={`w-6 h-6 rounded ${color.selected} cursor-pointer hover:scale-110 transition-transform`}
                                  onClick={() => changeSubjectColor(subject.code, color.name)}
                                  title={color.name}
                                ></div>
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
        </div>
        
        {/* Timetable Grid */}
        <div className="w-full lg:w-2/3 bg-white p-4 rounded shadow overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Weekly Timetable</h2>
          
          <div ref={timetableRef} className="relative" style={{ minWidth: "800px" }}>
            {/* Day Headers */}
            <div className="flex border-b">
              <div className="w-20 font-bold p-2 border-r">Time</div>
              <div className="flex-1 flex">
                {days.map(day => (
                  <div key={day} className="flex-1 font-bold p-2 text-center border-r">
                    {day}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Time Slots */}
            <div className="relative">
              {timeSlots.map((time, index) => (
                <div key={time} className="flex border-b" style={{ height: "60px" }}>
                  <div className="w-20 p-2 text-xs border-r">{time}</div>
                  <div className="flex-1 flex">
                    {days.map(day => (
                      <div 
                        key={`${day}-${time}`} 
                        className="flex-1 border-r relative"
                        style={{ height: "100%" }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Session Cards */}
              {getAllSessions().map(session => {
                const dayIndex = days.indexOf(session.day);
                if (dayIndex === -1) return null;
                
                const style = getSessionStyle(session);
                const colorClass = getSessionColor(session);
                
                // Calculate position for the current day column
                // First get the width of the time column (w-20 = 5rem = 80px)
                const timeColumnWidth = 80;
                
                // Get the timetable container width
                const timetableContainer = timetableRef.current;
                const containerWidth = timetableContainer?.clientWidth || 800;
                
                // Calculate the total available width for day columns
                const totalWidth = containerWidth - timeColumnWidth;
                const dayColumnWidth = totalWidth / days.length;
                
                // Basic column calculations
                const dayColWidth = totalWidth / days.length;
                const availableWidth = dayColWidth - 4; // Subtract some margin
                
                // Initialize position values
                let cardWidth = availableWidth;
                let offsetX = 0;
                
                // All sessions with overlaps get divided width, whether selected or not
                if (session.hasOverlap) {
                  // Divide the column width by number of overlapping sessions
                  cardWidth = availableWidth / session.overlapCount;
                  
                  // Position this card based on its index in the overlap group
                  offsetX = cardWidth * session.overlapIndex;
                  
                  // Log for debugging
                  console.log(`Session: ${session.subjectCode} (${session.day} ${session.startTime}-${session.endTime})`, {
                    overlaps: session.overlapCount,
                    position: session.overlapIndex,
                    width: cardWidth.toFixed(1),
                    offset: offsetX.toFixed(1)
                  });
                }
                
                // Final position calculation
                const leftPosition = timeColumnWidth + (dayIndex * dayColWidth) + offsetX;
                
                return (
                  <div 
                    key={session.id}
                    className={`absolute border-2 p-1 overflow-hidden text-xs rounded shadow-sm hover:shadow-md transition-shadow ${colorClass} cursor-pointer`}
                    style={{
                      ...style,
                      left: `${leftPosition}px`,
                      width: `${cardWidth}px`,
                      boxSizing: 'border-box',
                      zIndex: session.selected ? 2 : 1,
                      border: session.selected && session.hasOverlap ? '2px solid black' : undefined,
                      opacity: session.selected ? 1 : 0.7,
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleSession(session.subjectCode, session.componentName, session.optionId)}
                  >
                    <div className="font-bold">{session.subjectCode}</div>
                    <div className="font-semibold">{session.type}</div>
                    <div className="text-xs">{session.startTime}-{session.endTime}</div>
                    <div className="text-xs truncate">{session.location}</div>
                    <div className="text-xs truncate italic">{session.instructor}</div>
                    {/* Show warning indicator for conflicts */}
                    {session.potentialConflict && (
                      <>
                        {/* Red warning for selected sessions with conflicts */}
                        {session.selected && hasConflict(session.id) && (
                          <div className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold border-2 border-white shadow-md">!</div>
                        )}
                        
                        {/* Yellow warning for potential conflicts (when not selected) */}
                        {(!session.selected || !hasConflict(session.id)) && session.potentialConflict && (
                          <div className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-yellow-500 text-white rounded-full text-xs font-bold border-2 border-white shadow-md">!</div>
                        )}
                        
                        {/* Add a subtle border to indicate conflict potential */}
                        <div className="absolute inset-0 border-2 border-red-400 rounded pointer-events-none"></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Conflict Warning */}
          {conflicts.length > 0 && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
              Warning: Your schedule has {conflicts.length} time conflicts. Please resolve them.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;