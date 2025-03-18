import React from 'react';
import { useTimetable } from '../context/TimetableContext';

function InfoAccordion() {
  const { infoAccordionOpen, setInfoAccordionOpen } = useTimetable();

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div 
          className="border-b border-gray-200 p-4 cursor-pointer bg-blue-50 hover:bg-blue-100 transition flex justify-between items-center"
          onClick={() => setInfoAccordionOpen(!infoAccordionOpen)}
        >
          <h2 className="text-lg font-semibold text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Important Information & How to Use
          </h2>
          <svg className={`w-5 h-5 transform transition-transform ${infoAccordionOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        
        {infoAccordionOpen && (
          <div className="p-4 bg-blue-50 border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-red-600 mb-2">⚠️ Disclaimer</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>This is an unofficial tool for planning purposes only.</li>
                  <li>Always verify your timetable through the official <a href="https://my.uowdubai.ac.ae/timetable/viewer" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">UOWD Timetable Viewer</a>.</li>
                  <li>Class schedules are subject to change without notice.</li>
                  <li>Use this application at your own risk.</li>
                  <li>This app does not save or submit your selections to the university.</li>
                </ul>
                
                <h3 className="font-bold text-blue-800 mt-4 mb-2">About Grouped Classes</h3>
                <p className="text-sm">Some classes must be taken together:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Lecture A and Lecture B with the same instructor</li>
                  <li>Tutorial A and Tutorial B in the same group</li>
                  <li>Some courses require specific Lab + Lecture combinations</li>
                  <li>When you select one component, related sessions will be auto-selected (shown with "Auto-selected" label)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-blue-800 mb-2">How to Use This Tool</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Search for subjects in the left panel and add them to your selection.</li>
                  <li>For each subject, select the sessions you want to attend by checking the boxes.</li>
                  <li>Your selections will be displayed in the timetable on the right.</li>
                  <li>Check for conflicts (marked with red warning icons).</li>
                  <li>Use the color picker to change subject colors for better visualization.</li>
                  <li>When you're done, you can export your timetable as an image using the button in the header.</li>
                </ol>
                
                <h3 className="font-bold text-blue-800 mt-4 mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><span className="font-semibold">Conflict Detection:</span> Overlapping sessions are highlighted.</li>
                  <li><span className="font-semibold">Auto-selection:</span> Related components are automatically selected.</li>
                  <li><span className="font-semibold">Color Coding:</span> Each subject has its own color for easy identification.</li>
                  <li><span className="font-semibold">Export:</span> Save your timetable as an image to share or reference later.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoAccordion;