import { useTheme } from "../contexts/ThemeContext";
import { useTranslation  } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    return ( 
        <>
        <div className={`p-4 flex justify-center items-center gap-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <p className="text-sm">{t("footer.title")}</p>
        </div>
        </>
     );
}

export default Footer;