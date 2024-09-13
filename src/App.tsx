import Header from "./components/Header";
import { LanguageProvider } from './contexts/LanguageContext';
import './utils/i18n';
import { ThemeProvider } from "./contexts/ThemeContext";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
function App() {
  return (

    <div className="App">
      <LanguageProvider>
      <ThemeProvider>
        <Header/>
        <div className="p-10 bg-blue-300 text-red dark:bg-gray-900 dark:text-white">
         <MainContent/>
        </div>
        <Footer />
      </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
