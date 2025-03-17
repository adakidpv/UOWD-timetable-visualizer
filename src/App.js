import React from 'react';
import { TimetableProvider } from './context/TimetableContext';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoAccordion from './components/InfoAccordion';
import SubjectPanel from './components/SubjectPanel';
import Timetable from './components/Timetable';
import LoadingOverlay from './components/UI/LoadingOverlay';
import Notification from './components/UI/Notification';
import { useTimetable } from './context/TimetableContext';

// Main App Content component that uses the context
function AppContent() {
  const { isLoading, notification } = useTimetable();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}
      
      {/* Notification */}
      {notification && <Notification message={notification.message} type={notification.type} />}
      
      {/* Header */}
      <Header />

      {/* Information Accordion */}
      <InfoAccordion />

      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        {/* Subject Selection Panel */}
        <SubjectPanel />
        
        {/* Timetable Grid */}
        <Timetable />
      </div>
      
      {/* Footer with social links */}
      <Footer />
    </div>
  );
}

// Main App component that provides the context
function App() {
  return (
    <TimetableProvider>
      <AppContent />
    </TimetableProvider>
  );
}

export default App;