export type ContactFieldType = {
    label: string;
    value: string;
};
  
export type ResidencyInfoType = {
    residency: string;
    country: string;
    prefecture: string;
    city: string;
};
  
export type ContactInfoType = {
    tag?: string;
    name?: ContactFieldType;
    number?: ContactFieldType;
    email?: ContactFieldType;
    github?: ContactFieldType;
    linkedIn?: ContactFieldType;
    residency?: ContactFieldType;
}
  

export type SkillsFieldTType = {
    category: string;
    technologies: string;
}

export type SkillsType = {
    tag: string;
    frontend: SkillsFieldTType;
    backend: SkillsFieldTType;
    deployment: SkillsFieldTType;
    languages: SkillsFieldTType
}
  
export type ExperienceFieldType = {
    position: string;
    workplace: string;
    location: string;
    period: string;
    tasks: {task: string}[];
}

export type ExperienceType = {
    tag: string;
    experiences: ExperienceFieldType[]
}

export type ResumeContexProps = {
        value: ResumeSection;
}


export type EducationType = {
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

type ResumeSection = {
    title: string;
    summary?: string;
    subtitle?: string;
    tasks?: Array<{ task: string }>;
    skills?: SkillsType;
    projects?: Array<{ title: string, description: string }>;
    educationDetails?: EducationType;
    workExperience?: ExperienceType;
    certifications?: Array<{ title: string, level: string }>;
}


export type InfoItemProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
}


export type SectionProps = {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children: React.ReactNode;
  }