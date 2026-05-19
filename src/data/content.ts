import imgHeadshot from "../../assets/headshot.jpg";

export interface Project {
  title: string;
  description: string;
  image?: string;
  screenshot?: string;
  tech: string[];
  github?: string;
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
  resumeUrl: "https://github.com/user-attachments/files/26660913/resume.pdf",
  headshotSrc: imgHeadshot,
  headshotAlt: "Osmond Jian headshot",
};

export const featuredProjects: Project[] = [
  {
    title: "ChessFlow",
    description:
      "A chess app built with React and Supabase, designed to give players quick, actionable feedback to accelerate their improvement. I contributed to core features as part of the early development team.",
    tech: ["React", "Supabase"],
    demo: "https://www.chessflow.org",
  },
  {
    title: "iEmbraceland App",
    description:
      "A meditation app that incorporates haptic feedback to enhance the grounding experience. Meditation sessions feel more immersive and personalized. Currently, only for iOS.",
    tech: ["React Native", "Swift", "AWS Lambda"],
    demo: "https://iembraceland.com/",
  },
  {
    title: "AIm Assist",
    description:
      "An AI Chatbot that uses in-game stats from game data to help Valorant team managers build the perfect team using user prompts. This app was part of the Devpost hackathon, and placed 5th.",
    tech: ["Javascript", "Python", "Claude 3.5"],
    github: "https://github.com/Chowd224/AIm_Assist",
    demo: "https://devpost.com/software/aimassist",
  },

];

export const additionalProjects: Project[] = [
  {
    title: "24",
    description: "A browser-based take on the popular card game Math24, where the goal is to make the number 24 using four numbers and basic arithmetic. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/osmond-jian/24",
    screenshot: "cardmath24.netlify.app",
    demo: "https://two4-22f8.onrender.com/",
  },
  {
    title: "Battle Liner",
    description: "A browser-based adaptation of the strategic card game Battle Line, featuring real-time multiplayer powered by WebSockets. Two players compete to form the strongest formation across a series of flags.",
    tech: ["Javascript", "React", "WebSockets"],
    github: "https://github.com/osmond-jian/Battle-Liner",
    screenshot: "https://battle-liner.netlify.app/",
    demo: "https://battle-liner.onrender.com",
  },
  {
    title: "Global Esports Ranking",
    description:
      "Using game data from Riot Games, this app predicts how strong and what placement League of Legends teams have. This was part of the Devpost hackathon, and placed 2nd place.",
    tech: ["Javascript", "Python", "R"],
    github: "https://github.com/osmond-jian/riot_esports_ranking",
    demo: "https://globalesportsranking.netlify.app/",
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Fullstack Software Developer",
    company: "KPM Power",
    period: "August 2025 - Present",
    bullets: [
      "Maintained and developed KPM's inventory UI and database using ReactJS, Node, and Python",
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
    skills: ["JavaScript", "TypeScript", "React", "Svelte", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend Development",
    skills: ["Node.js", "Python", "GraphQL", "Langchain", "SQL", "MongoDB"],
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
