
export const PAGE_IDS = {
    HOME:"home",
    ABOUT:"about",
    SKILLS:"skills",
    PROJECTS:"projects",
    WORK_EXPERIENCE:"work-experience",
    CONTACT:"contact",
}
export const SECTION_COLOR_MAP = {
    [PAGE_IDS.ABOUT]:"red",
    [PAGE_IDS.PROJECTS]:"green",
    [PAGE_IDS.WORK_EXPERIENCE]:"blue",
    [PAGE_IDS.CONTACT]:"yellow"
}

export const SKILLS = {
    [PAGE_IDS.SKILLS]:{
        frontend: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Figma"],
        backend: ["Node.js", "Express", "GraphQL"],
        tools: ["Git / GitHub", "Docker", "Jest / Testing Library", "Webpack", "Babel"]
    }
}

export const WORK_EXPERIENCE = {
    [PAGE_IDS.WORK_EXPERIENCE]:{
        jobs: [
            {
                title: "UI Engineer II",
                company: "Flipkart",
                date: "2019 - Present",
                description: "Contributed to multiple business units including the Seller Platform, Flipkart Wholesale, and Flipkart Retails. My work has involved building and enhancing Seller Mobile App, Flipkart Wholesale Seller Dashboard, Pricing & Rewards, and the Claim Management System. More recently, I have been actively involved in the development of Flipkart's internal React component library",
            },
            {
                title: "UI Engineer I",
                company: "Flipkart",
                date: "2017 - 2019",
                description: "Contributed to business unit called the Seller Platform. Engineered and enhanced key systems: Payment Management and Order Management System.",
            },
            {
                title: "Web Developer",
                company: "Keystride Technologies",
                date: "2015 - 2016",
                description: "Developed responsive and accessible UIs using AngularJS (v1). I translated complex designer concepts into functional interfaces, enforced code quality via regular code reviews, and optimized the front-end workflow and deployment practices.",
            },
            {
                title: "Full Stack Developer",
                company: "Ajency.in",
                date: "2014 - 2015",
                description: "I contributed to multiple WordPress-based projects, including customizing templates and building features using core PHP. I also worked on internal tools, such as a time-tracking system designed to monitor and report developer work hours. My role involved end-to-end development, collaborating closely with designers and project managers to deliver tailored solutions.",
            },
            {
                title: "Junior Full Stack Developer",
                company: "Karbens",
                date: "2012 - 2014",
                description: "Developed static websites using HTML, CSS, and JavaScript. I was also involved in end-to-end development of dynamic projects, including a food ordering system and pharmaceutical presentation platforms. These projects were built using core PHP, with custom UI and interactive slides developed using vanilla JS and CSS.",
            }
        ]
    }
}

export const NAV_LINKS = {
    [PAGE_IDS.HOME]: {
        "id": PAGE_IDS.HOME,
        "label": "Home",
        "href": `#${PAGE_IDS.HOME}`
    },
    [PAGE_IDS.ABOUT]: {
        "id": PAGE_IDS.ABOUT,
        "label": "About Me",
        "href": `#${PAGE_IDS.ABOUT}`
    },
    [PAGE_IDS.WORK_EXPERIENCE]: {
        "id": PAGE_IDS.WORK_EXPERIENCE,
        "label": "Work Experience",
        "href": `#${PAGE_IDS.WORK_EXPERIENCE}`
    },
    [PAGE_IDS.PROJECTS]: {
        "id": PAGE_IDS.PROJECTS,
        "label": "Projects",
        "href": `#${PAGE_IDS.PROJECTS}`
    },
    [PAGE_IDS.CONTACT]: {
        "id": PAGE_IDS.CONTACT,
        "label": "Contact",
        "href": `#${PAGE_IDS.CONTACT}`
    },
}