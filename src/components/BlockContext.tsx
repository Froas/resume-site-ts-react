
import { Database } from "lucide-react";
import { ComputerDesktopIcon, CloudIcon, CommandLineIcon, CodeBracketSquareIcon, LanguageIcon, AcademicCapIcon, NewspaperIcon, DocumentCheckIcon, BuildingOffice2Icon, BriefcaseIcon, CogIcon, CubeTransparentIcon, CpuChipIcon, FireIcon } from "@heroicons/react/24/outline";
// import {  }
export interface BlockContextProps {
    value: BlockContextValue;
}

export interface SkillsType {
    tag: string,
        frontend: {
            category: string,
            technologies: string
        },
        backend: {
            category: string,
            technologies: string
        },
        deployment: {
            category: string,
            technologies: string
        },
        languages: {
            category: string,
            technologies: string
        }
}

export interface ExperienceType {
    tag: string,
    experiences: [{
        position: string,
        workplace: string,
        location: string,
        period: string,
        tasks: Array<{ task: string }>
    }]
}

export interface EducationType {
    tag: string,
    bachelor: {
        degree: string,
        place: string,
        date?: string
    },
    magister: {
        degree: string,
        place: string,
        date?: string
    }
}
export interface BlockContextValue {
    header: string;
    description?: string;
    secondHeader?: string;
    taskItems?: Array<{ task: string }>;
    skillItems?: SkillsType;
    projectItems?: Array<{ title: string, description: string }>;
    education?: EducationType,
    experiences?: ExperienceType,
    certification?: Array<{title: string, level: string}>,
}


const BlockContext = (props: BlockContextProps) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200">
                {/* Header Section */}
                <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {props.value.header}
                </h1>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                {/* Description Section */}
                <div className="mb-4">
                    <p className="text-left text-gray-700 dark:text-gray-300 text-align: justify text-align-last: center text-lg">
                        {props.value.description}
                    </p>
                </div>
                 {/* Project Items Section */}
                 {props.value.experiences?.experiences && (
                    <div className="mb-4">
                        {props.value.experiences?.experiences.map((work, index) => (
                            <div className="mb-4">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center text-left text-xl font-bold text-gray-900 dark:text-white space-y-2 sm:space-y-0 sm:space-x-2">
                                    <BuildingOffice2Icon className="size-5" />
                                    <p>{work.position}</p>
                                    <p>| {work.workplace}</p>
                                    <p>| {work.location}</p>
                                    <p>| {work.period}</p>
                                </div>
                                {work.tasks.map(task => (
                                     <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
                                     <li>{task.task}</li>
                                 </ul>
                                ) )}
                               
                            </div>
                        ))}
                    </div>
                )}
                {/* Skills Section */}
                {props.value.skillItems && (
                    <div className="mb-4">
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
                                <li className="flex items-center space-x-2">
                                    <ComputerDesktopIcon className="w-5 h-5 "/>
                                    <p className="font-bold">{props.value.skillItems.frontend?.category}</p>
                                    <p>{props.value.skillItems.frontend?.technologies}</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CommandLineIcon className="w-5 h-5 "/>
                                    <p className="font-bold">{props.value.skillItems.backend.category}</p>
                                    <p>{props.value.skillItems.backend.technologies}</p>
                                   
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CloudIcon className="w-5 h-5 "/>
                                    <p className="font-bold">{props.value.skillItems.deployment.category}</p>
                                    <p>{props.value.skillItems.deployment.technologies}</p>
                                </li>
                                <li className="flex items-center space-x-2"> 
                                    <LanguageIcon className="w-5 h-5 "/>
                                    <p className="font-bold">{props.value.skillItems.languages.category}</p>    
                                    <p>{props.value.skillItems.languages.technologies}</p>
                                </li>
                        </ul>
                    </div>
                )}
                {/* Second Header Section */}
                {props.value.secondHeader && (
                    <div className="mb-4">
                        <h2 className="text-left text-lg font-bold text-gray-900 dark:text-white">
                            {props.value.secondHeader}
                        </h2>
                    </div>
                )}
                {/* Task Items Section */}
                {props.value.taskItems && (
                    <div className="mb-4">
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {props.value.taskItems.map((item, index) => (
                                <li key={index}>{item.task}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Project Items Section */}
                {props.value.projectItems && (
                    <div className="mb-4">
                        {props.value.projectItems.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center space-x-2">
                                    <FireIcon className="size-5" />
                                    <h5 className="text-left text-l font-bold text-gray-900 dark:text-white text-lg">
                                        {item.title}
                                    </h5>
                                </div>
                                
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
                                    <li>{item.description}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
                {/* Certifications Items Section */}
                {props.value.certification && (
                    <div className="mb-4">
                         {props.value.certification.map((item, index) => (
                            <div className="flex items-center space-x-2 text-lg">
                                <DocumentCheckIcon className="size-5" />
                                <p className="text-left text-l font-bold text-gray-900 dark:text-white">
                                    {item.title}
                                </p>
                                <p>
                                    | {item.level}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                {/* Education Items Section */}
                {props.value.education && (
                    <div className="mb-4">
                        <div className="flex items-center space-x-2 text-lg">
                            <AcademicCapIcon className="size-5" />
                            <p className="text-left text-l font-bold text-gray-900 dark:text-white">
                                {props.value.education.bachelor.degree}
                            </p>
                            <p>
                              |  {props.value.education.bachelor.place}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlockContext;
