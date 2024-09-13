import BlockContext, { SkillsType, EducationType, ExperienceType } from "./BlockContext";
import { useTranslation } from "react-i18next";
import BioContext from "./BioContext";
import { BioContextType } from "./BioContext";
import { useState, useEffect } from "react";

const MainContent = () => {
    const { t, i18n } = useTranslation();
    
    const [experiences, setExperiences] = useState<ExperienceType>({
        tag: "",
        experiences: [
            {
                position: "",
                workplace: "",
                location: "",
                period: "",
                tasks: [
                    {
                        task: ""
                    }
                ]
            }
        ]
    });

    const [projects, setProjects] = useState<Array<{
        title: string;
        description: string;
    }>>([]);

    const [skills, setSkills] = useState<SkillsType>({
        tag: "",
        frontend: {
            category: "",
            technologies: ""
        },
        backend: {
            category: "",
            technologies: ""
        },
        deployment: {
            category: "",
            technologies: ""
        },
        languages: {
            category: "",
            technologies: ""
        }
    });

    const [education, setEducation] = useState<EducationType>({
        tag: "",
        bachelor: {
            degree: "",
            place: "",
            date: ""
        },
        magister: {
            degree: "",
            place: "",
            date: ""
        }
    })

    const [certifications, setCertifications] = useState<Array<{
        title: string;
        level: string;
    }>>([]);
    const [bio, setBio] = useState<BioContextType>({
        tag: "",
        name: {
            name: "",
            value: ""
        },
        number: {
            number: "",
            value: ""
        },
        email: {
            email: "",
            value: ""
        },
        github: {
            github: "",
            value: ""
        },
        linkedIn: {
            linkedIn: "",
            value: ""
        },
        residency: {
            residency: "",
            country: "",
            prefecture: "",
            city: ""
        }
    });

    useEffect(() => {
        const fetchedExperiences = t("maincontent.experience", { returnObjects: true }) as ExperienceType;

        const fetchedProjects = t("maincontent.projects.projects", { returnObjects: true }) as Array<{
            title: string;
            description: string;
        }>;

        const fetchedCertifications = t("maincontent.certification.certifications", { returnObjects: true }) as Array<{
            title: string;
            level: string;
        }>;
        const fetchedSkills = t("maincontent.skills", { returnObjects: true }) as SkillsType;

        const fetchedBio = t("maincontent.bio", { returnObjects: true }) as BioContextType;

        const fetchEducation = t("maincontent.education", { returnObjects: true}) as EducationType;

        setEducation(fetchEducation);
        setSkills(fetchedSkills);
        setExperiences(fetchedExperiences);
        setProjects(fetchedProjects);
        setCertifications(fetchedCertifications);
        setBio(fetchedBio);
    }, [i18n.language]);

    return (
        <>
            <BioContext bio={bio} />
            <BlockContext value={{ header: t("maincontent.summary.tag"), description: t("maincontent.summary.description") }} />
            <BlockContext value={{ header: t("maincontent.about-me.tag"), description: t("maincontent.about-me.description") }} />
            <BlockContext value={{ header: skills.tag, skillItems: skills }} />
            <BlockContext value={{header: experiences.tag, experiences: experiences }}/>
            <BlockContext value={{ header: t("maincontent.projects.tag"), projectItems: projects }} />
            <BlockContext value={{ header: education.tag, education: education }} />
            <BlockContext 
                value={{ 
                    header: t("maincontent.certification.tag"),
                    certification:  certifications
                }}
            />
        </>
    );
}

export default MainContent;
