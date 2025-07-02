import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import './utils/i18n';
import { ThemeProvider } from "./contexts/ThemeContext";
import LoadingPage from "./components/LoadingPage";
import ResumePage from "./components/ResumePage";

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleLoadingComplete = () => {
    setShowResume(true);
  };

  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <Routes>
            <Route 
              path="/" 
              element={
                showResume ? (
                  <Navigate to="/resume" replace />
                ) : (
                  <LoadingPage onComplete={handleLoadingComplete} />
                )
              } 
            />
            <Route 
              path="/resume" 
              element={<ResumePage />} 
            />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
