import ContextBlock from "./ContentBlock";
import { useTranslation } from "react-i18next";
import ContactBlock from "./ContactBlock";
import { ContactInfoType, SkillsType, EducationType, ExperienceType } from "./types";
// import { BioContextType } from "./ContactBlock";

const MainContent = () => {
    const { t } = useTranslation();
    

    const experiences = t("maincontent.experience", { returnObjects: true }) as ExperienceType;

    const projects = t("maincontent.projects.projects", { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    const certifications = t("maincontent.certification.certifications", { returnObjects: true }) as Array<{
        title: string;
        level: string;
    }>;
    const skills = t("maincontent.skills", { returnObjects: true }) as SkillsType;

    const contact = t("maincontent.contact", { returnObjects: true }) as ContactInfoType;
    const education = t("maincontent.education", { returnObjects: true}) as EducationType;
    // const { title, summary, subtitle, tasks, skills, projects, educationDetails, workExperience, certifications,} = props.value
    return (
        <>

            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 flex flex-col">
                    <ContactBlock contact={contact} />
                </div>
                <div className="flex-1 flex flex-col">
                    <ContextBlock value={{ title: skills.tag, skills: skills }} />
                </div>
            </div>
            {/* <ContactBlock contact={contact} /> */}
            <ContextBlock value={{ title: t("maincontent.summary.tag"), summary: t("maincontent.summary.description") }} />
            <ContextBlock value={{ title: t("maincontent.about-me.tag"), summary: t("maincontent.about-me.description") }} />
            {/* <ContextBlock value={{ title: skills.tag, skills: skills }} /> */}
            <ContextBlock value={{title: experiences.tag, workExperience: experiences }}/>
            <ContextBlock value={{ title: t("maincontent.projects.tag"), projects: projects }} />
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="md:w-1/2">
                    <ContextBlock value={{ title: education.tag, educationDetails: education }} />
                </div>
                <div className="md:w-1/2">
                    <ContextBlock value={{ title: t("maincontent.certification.tag"), certifications: certifications }} />
                </div>
            </div>
        </>
    );
}

export default MainContent;
