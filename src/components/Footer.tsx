import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";

const Footer = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    return (
        <footer className="py-4">
            <div className="container mx-auto text-center flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm block sm:hidden">
                    Created using{" "}
                    <a href="https://tailwindcss.com" className="text-blue-500 hover:underline">
                        Tailwind CSS
                    </a>,{" "}
                    <a href="https://shadcn.dev/" className="text-blue-500 hover:underline">
                        Shadcn/ui
                    </a>,{" "}
                    <a href="https://www.typescriptlang.org/" className="text-blue-500 hover:underline">
                        TypeScript
                    </a>,{" "}
                    and{" "}
                    <a href="https://reactjs.org/" className="text-blue-500 hover:underline">
                        React
                    </a>.
                </p>
            
                <div className="hidden sm:flex justify-center items-center space-x-2">
                    <p className="flex text-sm items-center">
                        Created using
                        <a href="https://tailwindcss.com" className="text-blue-500 hover:underline items-cente flex"> 
                            <SiTailwindcss className="w-5 h-5 inline-block mr-1 ml-2" /> Tailwind CSS 
                        </a>, 
                        <a href="https://www.typescriptlang.org/" className="text-blue-500 hover:underline items-cente flex"> 
                            <SiTypescript className="w-5 h-5 inline-block mr-1 ml-1" /> TypeScript
                        </a>, and 
                        <a href="https://reactjs.org/" className="text-blue-500 hover:underline flex items-cente">
                            <SiReact className="w-5 h-5 inline-block mr-1 ml-1" /> React
                        </a>
                    </p>
                </div>
                <p className="hidden sm:block text-gray-700 dark:text-gray-300 text-sm">
                    {/* Created using Tailwind CSS, Shadcn/ui, TypeScript, and React. */}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
