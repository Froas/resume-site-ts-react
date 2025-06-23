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

// New types for animations and effects
export type CubeProps = {
    delay: number;
    theme: string;
    index: number;
}

export type LoadingPageProps = {
    onComplete: () => void;
}

export type ParticlesConfig = {
    particles: {
        number: {
            value: number;
            density: {
                enable: boolean;
                value_area: number;
            };
        };
        color: {
            value: string;
        };
        shape: {
            type: string;
            stroke: {
                width: number;
                color: string;
            };
        };
        opacity: {
            value: number;
            random: boolean;
            anim: {
                enable: boolean;
                speed: number;
                opacity_min: number;
                sync: boolean;
            };
        };
        size: {
            value: number;
            random: boolean;
            anim: {
                enable: boolean;
                speed: number;
                size_min: number;
                sync: boolean;
            };
        };
        line_linked: {
            enable: boolean;
            distance: number;
            color: string;
            opacity: number;
            width: number;
        };
        move: {
            enable: boolean;
            speed: number;
            direction: string;
            random: boolean;
            straight: boolean;
            out_mode: string;
            bounce: boolean;
            attract: {
                enable: boolean;
                rotateX: number;
                rotateY: number;
            };
        };
    };
    interactivity: {
        detect_on: string;
        events: {
            onhover: {
                enable: boolean;
                mode: string;
            };
            onclick: {
                enable: boolean;
                mode: string;
            };
            resize: boolean;
        };
        modes: {
            grab: {
                distance: number;
                line_linked: {
                    opacity: number;
                };
            };
            bubble: {
                distance: number;
                size: number;
                duration: number;
                opacity: number;
                speed: number;
            };
            repulse: {
                distance: number;
                duration: number;
            };
            push: {
                particles_nb: number;
            };
            remove: {
                particles_nb: number;
            };
        };
    };
    retina_detect: boolean;
};