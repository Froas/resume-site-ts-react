import { useTranslation  } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react"
import GooeyNav from './GooeyNav';
// @ts-ignore: no types for html2pdf.js
import html2pdf from 'html2pdf.js';

const Header = () => {
    const { t } = useTranslation();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [ isChecked, setIsChecked ] = useState(false);

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
      <header className={`p-4 flex justify-between items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/60 text-white' : 'bg-white/60 text-black'}`}>
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
          {false
          ?  <button
            onClick={() => {
              const element = document.getElementById('resume-content');
              if (element) {
                html2pdf()
                  .set({
                    margin:       0.5,
                    filename:     'resume.pdf',
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2, useCORS: true },
                    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
                  })
                  .from(element)
                  .save();
              }
            }}
            className="ml-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow"
          >
            Download Resume
          </button>
          : ""
          }
         
        </div>
      </header>
    );
}

export default Header;
