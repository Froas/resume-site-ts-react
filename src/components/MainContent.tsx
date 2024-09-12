import BlockContext from "./BlockContext";
import { BlockContextProps } from "./BlockContext"
import { useTranslation } from "react-i18next";
const MainContent = () => {
    const { t } = useTranslation();
    const experiences = t("maincontent.experience.experiences", { returnObjects: true }) as Array<{
        position: string;
        workplace: string;
        location: string;
        period: string;
        tasks: Array<{ task: string }>;
      }>;
    const projects = t("maincontent.projects.projects", { returnObjects: true }) as Array<{
        title: string,
        description: string
    }>

    const certifications = t("maincontent.certification.certifications", { returnObjects: true }) as Array<{
        title: string;
        level: string;
      }>;
    return ( 
        <>
        <BlockContext header={t("maincontent.summary.tag")} description={t("maincontent.summary.description")}></BlockContext>
        <BlockContext header={t("maincontent.about-me.tag")} description={t("maincontent.about-me.description")}></BlockContext>
        {experiences.map((experience, index) => (
             <BlockContext header={index < 1 ? t("maincontent.experience.tag"): ""} secondHeader={experience.position + " | "  + experience.workplace + " | " + experience.location + " | " + experience.period} listItems={experience.tasks}></BlockContext>
        ))}
         <BlockContext header={t("maincontent.projects.tag")} projectItem={projects}></BlockContext>
         <BlockContext header={t("maincontent.education.tag")} description={t("maincontent.education.bachelor.degree") + " | " + t("maincontent.education.bachelor.place")}></BlockContext>
         <BlockContext header={t("maincontent.certification.tag")} description={certifications[0].title + " | " + certifications[0].level}></BlockContext>
        </>
     );
}

export default MainContent;