import React from 'react';
import { useTimetable } from '../../context/TimetableContext';
import SubjectSearch from './SubjectSearch';
import SubjectList from './SubjectList';

function SubjectPanel() {
  return (
    <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Subject Selection</h2>
      
      <SubjectSearch />
      <SubjectList />
    </div>
  );
}

export default SubjectPanel;