import React from 'react';
import { useTimetable } from '../../context/TimetableContext';

function Timetable() {
  const { 
    timetableRef,
    days,
    timeSlots,
    conflicts,
    getAllSessions,
    getSessionStyle,
    getSessionColor,
    toggleSession,
    hasConflict
  } = useTimetable();

  return (
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
  );
}

export default Timetable;