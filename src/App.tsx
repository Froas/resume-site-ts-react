import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import { LanguageProvider } from './contexts/LanguageContext';
import './utils/i18n';
import { ThemeProvider } from "./contexts/ThemeContext";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
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
