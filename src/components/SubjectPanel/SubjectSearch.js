import React from 'react';
import { useTimetable } from '../../context/TimetableContext';

function SubjectSearch() {
  const { 
    searchTerm, 
    setSearchTerm, 
    availableSubjects, 
    addSubject 
  } = useTimetable();

  return (
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
  );
}

export default SubjectSearch;