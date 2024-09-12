import { useTranslation  } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/Button"
import { Switch } from "./ui/Switch";
import { useState, useEffect } from "react"

const Header = () => {
    const { t } = useTranslation();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isChecked, setIsChecked] = useState(false);
    const toggleSwitchAndButton = () => {
        console.log('Switch toggled');
        toggleTheme();
        setIsChecked(prev => !prev);
    }

    useEffect(() => {
        if (theme === 'dark') {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [theme]);

    return ( 
        <header className={`p-4 flex justify-end items-center gap-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <Button className="bg-gray-600 text-white" onClick={() => toggleLanguage(language === 'en' ? 'jp' : 'en')}>
                {language === 'en' ? 'English' : '日本語'}
            </Button>

            <Switch
                checked={isChecked}
                onCheckedChange={toggleSwitchAndButton}
                className="relative inline-flex h-6 w-11 items-center rounded-full data-[state=!checked]:bg-black data-[state=checked]:bg-white"
            />

            <Button onClick={toggleSwitchAndButton}>
                {isChecked ? t('header.switchThemeDark') : t('header.switchThemeLight')}
            </Button>
        </header>

    );
}

export default Header;
