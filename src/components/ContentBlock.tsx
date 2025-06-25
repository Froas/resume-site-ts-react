import { ComputerDesktopIcon, CloudIcon, CommandLineIcon, ServerStackIcon, LanguageIcon, AcademicCapIcon, DocumentCheckIcon, BuildingOffice2Icon, FireIcon } from "@heroicons/react/24/outline";
import { ResumeContexProps, InfoItemProps, SectionProps, ProjectItem } from './types'

const ContextBlock = (value : ResumeContexProps) => {

    const {
        title,
        summary,
        subtitle,
        tasks,
        skills,
        projects,
        educationDetails,
        workExperience,
        certifications,
      } = value.value;

      const InfoItem = (props: InfoItemProps) => (
        <li className="flex flex-wrap items-center space-x-2">
          <props.icon className="w-5 h-5" />
          <p className="font-bold text-sm sm:text-base">{props.label}</p>
          <p className="break-all text-sm sm:text-base">{props.value}</p>
        </li>
      );
      
      const Section = (props: SectionProps) => (
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-lg">
            {props.icon 
                ? <props.icon className="w-5 h-5" /> 
                : ""
            }
            <p className="text-left text-lg text-gray-900 dark:text-white">
                {props.children}
            </p>
          </div>

        </div>
      );

      return (
        <div className="flex-1 flex flex-col bg-white/30 dark:bg-gray-800/30 p-3 rounded-lg shadow-lg border border-gray-200 mb-6">
          <div className="bg-white/30 dark:bg-gray-800/30 p-6 rounded-lg">
            {/* Title */}
            {title && (
              <>
                <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {title}
                </h1>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
              </>
            )}
            {/* Summary */}
            {summary && (
              <div className="mb-4">
                <p className="text-left text-gray-700 dark:text-gray-300 text-lg">
                  {summary}
                </p>
              </div>
            )}
            {/* Experince */}
            {workExperience && workExperience?.experiences?.length > 0 && (
              <Section>
                {workExperience.experiences.map((work, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                      <div className="flex items-center gap-1">
                        <BuildingOffice2Icon className="w-5 h-5 mr-1" />
                        <span className="font-bold text-base sm:text-lg">{work.position}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-gray-500 text-base sm:text-sm font-normal">
                        {/* | Unicast LLC | Ibaraki | May 2022 - December 2022 */}
                        <span className="hidden sm:inline">|</span>
                        <span>{work.workplace}</span>
                        <span className="hidden sm:inline">|</span>
                        <span>{work.location}</span>
                        <span className="hidden sm:inline">|</span>
                        <span>{work.period}</span>
                      </div>
                    </div>
                    {work.tasks?.length > 0 && (
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
                        {work.tasks.map((task, idx) => (
                          <li key={ idx}>{task.task}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Section>
            )}
            {/* Skills */}
            {skills && (
              <Section>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg space-y-4 mt-6 sm:mt-10">
                  {skills.frontend && (
                    <InfoItem
                      icon={ComputerDesktopIcon}
                      label={skills.frontend.category}
                      value={skills.frontend.technologies}
                    />
                  )}
                  {skills.backend && (
                    <InfoItem
                      icon={CommandLineIcon}
                      label={skills.backend.category}
                      value={skills.backend.technologies}
                    />
                  )}
                  {skills.deployment && (
                    <InfoItem
                      icon={CloudIcon}
                      label={skills.deployment.category}
                      value={skills.deployment.technologies}
                    />
                  )}
                  {skills.languages && (
                    <InfoItem
                      icon={LanguageIcon}
                      label={skills.languages.category}
                      value={skills.languages.technologies}
                    />
                  )}
                </ul>
              </Section>
            )}
            {/* Subtitle */}
            {subtitle && (
              <div className="mb-4">
                <h2 className="text-left text-lg font-bold text-gray-900 dark:text-white">
                  {subtitle}
                </h2>
              </div>
            )}
            {/* Tasks */}
            {tasks && tasks?.length > 0 && (
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {tasks.map((item, index) => (
                    <li key={index}>{item.task}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Project */}
            {projects && (projects as ProjectItem[])?.length > 0 && (
              <Section>
                {(projects as ProjectItem[]).map((item, index) => (
                  <div key={ index} className="mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-2">
                        <FireIcon className="w-5 h-5 mb-2 sm:mb-0" />
                        <h5 className="text-left text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                            {item.title}
                        </h5>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                      <li>{item.description}</li>
                    </ul>
                    {item.technologies && (
                      <div className="flex items-center space-x-2 mt-1">
                        <ServerStackIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.technologies}</span>
                      </div>
                    )}
                  </div>
                ))}
              </Section>
            )}
            {/* Education */}

              {educationDetails?.bachelor && (
                <Section icon={AcademicCapIcon}>
                  <div className="flex items-center space-x-2 text-lg">
                    <p className="text-left text-lg font-bold text-gray-900 dark:text-white">
                      {educationDetails.bachelor.degree}
                    </p>
                    <p>| {educationDetails.bachelor.place}</p>
                  </div>
                </Section>
              )}
              {educationDetails?.magister && (
                <Section icon={AcademicCapIcon}>
                  <div className="flex items-center space-x-2 text-lg">
                    <p className="text-left text-lg font-bold text-gray-900 dark:text-white">
                      {educationDetails.magister.degree}
                    </p>
                    <p>| {educationDetails.magister.place}</p>
                  </div>
                </Section>
              )}
              {
                educationDetails 
                ?<div style={{ minHeight: 172 }} />
                : ""
              }
           
            {/* Certifications */}
            {certifications && certifications?.length > 0 && (
              <Section>
                <div className="flex flex-col gap-2 flex-1 h-full">
                  {certifications.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-lg"
                    >
                      <DocumentCheckIcon className="w-5 h-5" />
                      <p className="text-left text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p>| {item.level}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>
      );
}

export default ContextBlock;












// import { Database } from "lucide-react";
// import { ComputerDesktopIcon, CloudIcon, CommandLineIcon, CodeBracketSquareIcon, LanguageIcon, AcademicCapIcon, NewspaperIcon, DocumentCheckIcon, BuildingOffice2Icon, BriefcaseIcon, CogIcon, CubeTransparentIcon, CpuChipIcon, FireIcon } from "@heroicons/react/24/outline";
// import { ResumeContexProps } from './types'



// const ContextBlock = (props: ResumeContexProps) => {
//     const { title, summary, subtitle, tasks, skills, projects, educationDetails, workExperience, certifications,} = props.value
//     return (
//         <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 mb-6">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
//                 {/* Header Section */}
//                 <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                     {title}
//                 </h1>
//                 <hr className="my-4 border-gray-300 dark:border-gray-600" />
//                 {/* Description Section */}
//                 <div className="mb-4">
//                     <p className="text-left text-gray-700 dark:text-gray-300 text-align: justify text-align-last: center text-lg">
//                         {summary}
//                     </p>
//                 </div>
//                  {/* Project Items Section */}
//                  {workExperience?.experiences && (
//                     <div className="mb-4">
//                         {workExperience?.experiences.map((work, index) => (
//                             <div className="mb-4">
//                                 <div className="flex flex-col sm:flex-row items-start sm:items-center text-left text-xl font-bold text-gray-900 dark:text-white space-y-2 sm:space-y-0 sm:space-x-2">
//                                     <BuildingOffice2Icon className="w-5 h-5" />
//                                     <p>{work.position}</p>
//                                     <p>| {work.workplace}</p>
//                                     <p>| {work.location}</p>
//                                     <p>| {work.period}</p>
//                                 </div>
//                                 {work.tasks.map(task => (
//                                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
//                                      <li>{task.task}</li>
//                                  </ul>
//                                 ) )}
                               
//                             </div>
//                         ))}
//                     </div>
//                 )}
//                 {/* Skills Section */}
//                 {skills && (
//                     <div className="mb-4 h-full">
//                         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg space-y-4  mt-6 sm:mt-10">
//                         <li className="flex flex-wrap items-center space-x-2">
//                             <ComputerDesktopIcon className="w-5 h-5"/>
//                             <p className="font-bold text-sm sm:text-bas">{skills.frontend?.category}</p>
//                             <p className="break-all text-sm sm:text-bas">{skills.frontend?.technologies}</p>
//                         </li>
//                         <li className="flex flex-wrap items-center space-x-2">
//                             <CommandLineIcon className="w-5 h-5"/>
//                             <p className="font-bold text-sm sm:text-bas">{skills.backend.category}</p>
//                             <p className="break-all text-sm sm:text-bas">{skills.backend.technologies}</p>
//                         </li>
//                         <li className="flex flex-wrap items-center space-x-2">
//                             <CloudIcon className="w-5 h-5"/>
//                             <p className="font-bold text-sm sm:text-bas">{skills.deployment.category}</p>
//                             <p className="break-all text-sm sm:text-bas">{skills.deployment.technologies}</p>
//                         </li>
//                         <li className="flex flex-wrap items-center space-x-2">
//                             <LanguageIcon className="w-5 h-5"/>
//                             <p className="font-bold text-sm sm:text-bas">{skills.languages.category}</p>
//                             <p className="break-all text-sm sm:text-bas">{skills.languages.technologies}</p>
//                         </li>
//                         </ul>
//                     </div>
//                     )}
//                 {/* Second Header Section */}
//                 {subtitle && (
//                     <div className="mb-4">
//                         <h2 className="text-left text-lg font-bold text-gray-900 dark:text-white">
//                             {subtitle}
//                         </h2>
//                     </div>
//                 )}
//                 {/* Task Items Section */}
//                 {tasks && (
//                     <div className="mb-4">
//                         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                             {tasks.map((item, index) => (
//                                 <li key={index}>{item.task}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {/* Project Items Section */}
//                 {projects && (
//                     <div className="mb-4">
//                         {projects.map((item, index) => (
//                             <div key={index} className="mb-4">
//                                 <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-2">
//                                     <FireIcon className="w-5 h-5 mb-2 sm:mb-0" />
//                                     <h5 className="text-left text-base sm:text-lg font-bold text-gray-900 dark:text-white">
//                                         {item.title}
//                                     </h5>
//                                 </div>
                                
//                                 <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base sm:text-lg">
//                                     <li>{item.description}</li>
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//                 {/* Certifications Items Section */}
//                 {certifications && (
//                     <div className="mb-4">
//                          {certifications.map((item, index) => (
//                             <div className="flex items-center space-x-2 text-lg">
//                                 <DocumentCheckIcon className="w-5 h-5" />
//                                 <p className="text-left text-l font-bold text-gray-900 dark:text-white">
//                                     {item.title}
//                                 </p>
//                                 <p>
//                                     | {item.level}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//                 {/* Education Items Section */}
//                 {educationDetails && (
//                     <div className="mb-4">
//                         <div className="flex items-center space-x-2 text-lg">
//                             <AcademicCapIcon className="w-5 h-5" />
//                             <p className="text-left text-l font-bold text-gray-900 dark:text-white">
//                                 {educationDetails.bachelor.degree}
//                             </p>
//                             <p>
//                               |  {educationDetails.bachelor.place}
//                             </p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ContextBlock;