import React, { createContext, useState, useContext, useRef } from 'react';
import { courseData } from '../data/courseData';

// Create context
const TimetableContext = createContext();

// Provider component
export function TimetableProvider({ children }) {
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
  // For information accordion
  const [infoAccordionOpen, setInfoAccordionOpen] = useState(true);
  
  const timetableRef = useRef(null);

  // Reduced color options with distinct colors
  const colorOptions = [
    { name: "Blue", selected: "bg-blue-200 border-blue-400", unselected: "bg-blue-100 border-blue-300", conflict: "bg-red-300 border-red-500" },
    { name: "Green", selected: "bg-green-200 border-green-400", unselected: "bg-green-100 border-green-300", conflict: "bg-red-300 border-red-500" },
    { name: "Red", selected: "bg-red-200 border-red-400", unselected: "bg-red-100 border-red-300", conflict: "bg-red-300 border-red-500" },
    { name: "Purple", selected: "bg-purple-200 border-purple-400", unselected: "bg-purple-100 border-purple-300", conflict: "bg-red-300 border-red-500" },
    { name: "Orange", selected: "bg-orange-200 border-orange-400", unselected: "bg-orange-100 border-orange-300", conflict: "bg-red-300 border-red-500" },
    { name: "Teal", selected: "bg-teal-200 border-teal-400", unselected: "bg-teal-100 border-teal-300", conflict: "bg-red-300 border-red-500" },
    { name: "Pink", selected: "bg-pink-200 border-pink-400", unselected: "bg-pink-100 border-pink-300", conflict: "bg-red-300 border-red-500" },
    { name: "Yellow", selected: "bg-yellow-200 border-yellow-400", unselected: "bg-yellow-100 border-yellow-300", conflict: "bg-red-300 border-red-500" },
    { name: "Gray", selected: "bg-gray-300 border-gray-500", unselected: "bg-gray-200 border-gray-400", conflict: "bg-red-300 border-red-500" }
  ];

  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

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

  // Helper function to convert time to minutes for comparison
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

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

  // Check if a session has a conflict
  const hasConflict = (sessionId) => {
    return conflicts.some(conflict => 
      conflict[0] === sessionId || conflict[1] === sessionId
    );
  };

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

  // Show notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Export timetable as image
  const exportImage = () => {
    if (!timetableRef.current) return;
    
    if (selectedSubjects.length === 0) {
      showNotification('Please select at least one subject before exporting', 'warning');
      return;
    }
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(timetableRef.current).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'timetable.png';
        link.click();
        
        showNotification('Timetable exported as image successfully!', 'success');
      });
    });
  };

  // Provide the context value
  const contextValue = {
    // State
    selectedSubjects,
    selectedSessions,
    subjectColors,
    showColorPicker,
    conflicts,
    searchTerm,
    isLoading,
    notification,
    collapsedSubjects,
    infoAccordionOpen,
    timetableRef,
    
    // Constants
    colorOptions,
    days,
    timeSlots,
    
    // Functions
    setShowColorPicker,
    setSearchTerm,
    setIsLoading,
    setInfoAccordionOpen,
    toggleSubjectCollapse,
    availableSubjects,
    addSubject,
    changeSubjectColor,
    removeSubject,
    toggleSession,
    hasConflict,
    getAllSessions,
    getSessionStyle,
    getSessionColor,
    showNotification,
    exportImage,
    timeToMinutes
  };

  return (
    <TimetableContext.Provider value={contextValue}>
      {children}
    </TimetableContext.Provider>
  );
}

// Custom hook for using the context
export function useTimetable() {
  const context = useContext(TimetableContext);
  if (!context) {
    throw new Error('useTimetable must be used within a TimetableProvider');
  }
  return context;
}