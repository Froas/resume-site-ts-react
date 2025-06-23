import { useTranslation  } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/Button"
import { Switch } from "./ui/Switch";
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import GooeyNav from './GooeyNav';
// @ts-ignore: no types for html2pdf.js
import html2pdf from 'html2pdf.js';

const Header = () => {
    const { t } = useTranslation();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [ isChecked, setIsChecked ] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleBackToLoading = () => {
        navigate('/');
        window.location.reload(); // Reload page to reset state
    };

    useEffect(() => {
        const nav = document.querySelector('.GooeyNav') || document.querySelector('nav');
        if (!nav) return;
        const lis = nav.querySelectorAll('li');
        if (lis.length < 2) return;
        lis[0].onclick = (e) => {
            e.preventDefault();
            toggleLanguage(language === 'en' ? 'jp' : 'en');
        };
        lis[1].onclick = (e) => {
            e.preventDefault();
            toggleSwitchAndButton();
        };
        return () => {
            lis[0].onclick = null;
            lis[1].onclick = null;
        };
    }, [language, isChecked, theme]);

    return (
      <header className={`p-4 flex justify-between items-center gap-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div />
        <div className="flex justify-end w-full items-center gap-2">
          <GooeyNav
            items={[
              {
                label: language === 'en' ? 'English' : '日本語',
                href: '#lang',
              },
              {
                label: isChecked ? t('header.switchThemeLight')  : t('header.switchThemeDark') ,
                href: '#theme',
              },
            ]}
            initialActiveIndex={0}
          />
          <button
            style={{ display: 'none' }}
            onClick={() => {
              const element = document.getElementById('resume-content');
              if (element) {
                html2pdf().from(element).save('resume.pdf');
              }
            }}
            className="ml-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow"
          >
            Download Resume
          </button>
        </div>
      </header>
    );
}

export default Header;
