import Header from "./components/Header";
import { LanguageProvider } from './contexts/LanguageContext';
import './utils/i18n';
import { ThemeProvider } from "./contexts/ThemeContext";
import MainContent from "./components/MainContent";
function App() {
  return (

    <div className="App">
      <LanguageProvider>
      <ThemeProvider>
        <Header/>
        <div className="p-10 bg-blue-500 text-red">
         <MainContent/>
        </div>
      </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
