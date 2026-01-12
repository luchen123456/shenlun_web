import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import AnnotationView from './components/AnnotationView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [previousView, setPreviousView] = useState<ViewState>('dashboard');

  const handleNavigate = (view: ViewState) => {
    if (view === 'annotation') {
      setPreviousView(currentView);
    }
    setCurrentView(view);
  };

  const handleCloseAnnotation = () => {
    setCurrentView(previousView);
  };

  return (
    <div className="min-h-screen">
      {currentView === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
      {currentView === 'report' && <Report onNavigate={handleNavigate} />}
      {currentView === 'annotation' && (
        <>
          {/* We keep the report view in background if we came from there, but for simplicity we just render the modal independently here 
              or we could have rendered Report and put AnnotationView on top. 
              Let's re-render Report in the background to give that modal feeling if previous was report.
          */}
          {previousView === 'report' && <Report onNavigate={() => {}} />} 
          <AnnotationView onClose={handleCloseAnnotation} />
        </>
      )}
    </div>
  );
};

export default App;