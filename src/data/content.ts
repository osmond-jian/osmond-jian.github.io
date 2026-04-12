import project1Image from "../../assets/project1_embrace.png";
import project2Image from "../../assets/project3_aimassist.jpg";
import project3Image from "../../assets/project2_riot.jpg";
import project4Image from "../../assets/project4_root_blossom.png";
import project5Image from "../../assets/project_additional5_tea.jpg";
import project6Image from "../../assets/project_additional6_restaurant.jpg";
import headshotSrc from "../../assets/headshot.jpg";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "Osmond Jian",
  title: "Fullstack Software Developer at KPM Power | Graduate at University of Toronto",
  bio: "I'm a software developer with a passion for building impactful products. Currently, I'm working at KPM Power where I develop and maintain features for KPM's inventory UI, database, and testing pipelines. With a strong foundation in development from years of freelance experience, I bring both theoretical knowledge and practical experience to solve complex problems.",
  github: "https://github.com/osmond-jian",
  linkedin: "https://www.linkedin.com/in/osmond-jian/",
  email: "osmond.jian@gmail.com",
  // To update your resume: create a new GitHub release and attach the PDF named "resume.pdf".
  // The URL below always resolves to the latest release asset — no code change needed.
  resumeUrl: "https://github.com/osmond-jian/osmond-jian.github.io/releases/latest/download/resume.pdf",
  headshotSrc,
  headshotAlt: "Osmond Jian headshot",
};

export const featuredProjects: Project[] = [
  {
    title: "iEmbraceland App",
    description:
      "A meditation app that incorporates haptic feedback to enhance the grounding experience. Meditation sessions feel more immersive and personalized. Currently, only for iOS.",
    image: project1Image,
    tech: ["React Native", "Swift", "AWS Lambda"],
    github: "https://github.com/osmond-jian",
    demo: "https://apps.apple.com/us/app/iembraceland/id6740446690",
  },
  {
    title: "AIm Assist",
    description:
      "An AI Chatbot that uses in-game stats from game data to help Valorant team managers build the perfect team using user prompts. This app was part of the Devpost hackathon, and placed 5th.",
    image: project2Image,
    tech: ["Javascript", "Python", "Claude 3.5"],
    github: "https://github.com/Chowd224/AIm_Assist",
    demo: "https://devpost.com/software/aimassist",
  },
  {
    title: "Global Esports Ranking",
    description:
      "Using game data from Riot Games, this app predicts how strong and what placement League of Legends teams have. This was part of the Devpost hackathon, and placed 2nd place.",
    image: project3Image,
    tech: ["Javascript", "Python", "R"],
    github: "https://github.com/osmond-jian/riot_esports_ranking",
    demo: "https://globalesportsranking.netlify.app/",
  },
];

export const additionalProjects: Project[] = [
  {
    title: "iEmbrace Product Page",
    description: "The official page for the Embrace app and the upcoming hardware device.",
    image: project4Image,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/osmond-jian/root-and-blossom",
    demo: "https://iembraceland.com/",
  },
  {
    title: "Tea Store Page",
    description: "A sample website for a tea shop, with a reservation form and a map.",
    image: project5Image,
    tech: ["Javascript", "Bootstrap", "JQuery"],
    github: "https://github.com/osmond-jian",
    demo: "https://teahut-template.netlify.app/",
  },
  {
    title: "Restaurant Page",
    description: "A sample website for a restaurant, tastefully designed with a reservation form.",
    image: project6Image,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/osmond-jian",
    demo: "https://brewsterbargrill.netlify.app/",
  },
];

export const workExperience: WorkExperience[] = [
    {
    role: "Fullstack Software Developer",
    company: "KPM Power",
    period: "August 2025 - Present",
    bullets: [
      "Maintain and developed KPM's inventory UI and database using ReactJS, Node, and Python",
      "Improved product quality by writing unit, integration and quality testing using Vitest, RTL, and Jest",
      "Developed data pipelines and data visualization tools for better visibility on inventory, output productivity, and defect rates",
    ],
  },
  {
    role: "Fullstack Software Developer",
    company: "iEmbrace LLC",
    period: "July 2024 - August 2025",
    bullets: [
      "Developed the main features and UI of the meditation app using React Native, Swift, and Expo",
      "Integrated haptic experience using AHAP files created from .wav files using Python",
      "Implemented data-driven features that improve user accessibility and usability",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "January 2022 - February 2025",
    bullets: [
      "Built static websites for small and local businesses using HTML, CSS, and JavaScript",
      "Integrated and updated content management services like WordPress and SquareSpace to improve accessibility and SEO",
      "Handled deployment and continual maintenance to keep up with the ever-changing landscape",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "React", "Svelte", "Replit", "Tailwind CSS"],
  },
  {
    label: "Backend Development",
    skills: ["Node.js", "Python", "GraphQL", "LLM APIs", "SQL", "MongoDB"],
  },
  {
    label: "Mobile Development",
    skills: ["React Native", "Swift", "Expo Go", "iOS Development", "Mobile UI/UX"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Arts in Anthropology",
    institution: "University of Toronto",
    period: "2019 - 2020",
    description:
      "Graduated with honors, specializing in medical anthropology and qualitative data",
  },
  {
    degree: "Bachelor of Health Sciences",
    institution: "McMaster University",
    period: "2013 - 2017",
    description:
      "Graduated with honors, a minor in psychology, and a data-heavy thesis project on Autism Spectrum disorder with mouse models",
  },
];
