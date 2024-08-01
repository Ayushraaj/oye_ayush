import { blue, green, red } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Research Paper 1",
        company_name: "Quantum Annealing",
        icon: blue,
        iconBg: "#accbe1",
        date: "January 2023 - June 2024",
        points: [
            "Comparison Results: Quantum Annealing outperforms PCA in dimensionality reduction for predictive models, yielding lower Mean Squared Error and higher R-squared values.",
            "Performance Insight: Quantum Annealing's superior ability to identify data patterns enhances model performance.",
            "Optimization Potential: Fine-tuning parameters and optimizing Quantum Annealing algorithms can further improve efficiency.",
            "Future Research: Comparing Quantum Annealing with other methods (Autoencoders, t-SNE, UMAP) and exploring scalability will enhance understanding and applications."
        ]
    },
    {
        title: "Research Paper 2",
        company_name: "Optimizing Algorithms for Car Racing Time Laps",
        icon: red,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - July 2025",
        points: [
            "Advancements in AI and RL: Over the past decade AI advancements particularly in reinforcement learning have made training RL agents for custom 2D games more accessible due to improved algorithms and hardware.",
            "A2C Model Performance: The A2C model in this study achieved the desired performance in just 1.75 million timesteps highlighting the efficiency of modern RL methods compared to traditional finite state machines in game development.",
            "Benefits of RL in Game Development: RL agents can adapt and respond to dynamic player interactions providing a more flexible and responsive gameplay experience thus revolutionizing game development by making it more efficient and adaptive.",
            "Future Research Directions: Future work could focus on hyperparameter tuning, extended training runs, and developing custom algorithms to optimize ray perception sensor distances for vehicle navigation.",
        ],
    },
    {
        title: "Research Paper 3",
        company_name: "QKDN in underwater networks, Quantum Cryptography",
        icon: green,
        iconBg: "#b7e4c7",
        date: "Present",
        points: [
            "Still Working on it....."
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: '#',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ayush-raj-a3b459249/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '#',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: '#',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: '#',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: '#',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: '#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: '#',
    }
];
