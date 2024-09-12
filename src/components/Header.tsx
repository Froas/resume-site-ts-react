import { useTranslation  } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
    const { t } = useTranslation();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return ( 
        <header className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h1>{t('header.welcome')}</h1>
            <button onClick={() => toggleLanguage(language === 'en' ? 'jp' : 'en')}>
                {language === 'en' ? 'English' : '日本語'}
            </button>
            <button onClick={toggleTheme}>  {/* Убираем передачу аргумента */}
                {theme === 'light' ? t('header.switchThemeDark') : t('header.switchThemeLight')}
            </button>
        </header>
    );
}

export default Header;
