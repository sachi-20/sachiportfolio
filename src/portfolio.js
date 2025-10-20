/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sachi Kaushik",
  title: "Hi there, I'm Sachi",
  subTitle: emoji(
    "AI-focused Software Engineer ⚙️🧠 with experience in building intelligent systems that integrate scalable data pipelines, embeddings, model deployment, retrieval, and monitoring. Merging software engineering with machine learning 💡"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xBdOOhWVqPVgtwGbDzOOvq8zOGtO16yV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sachi-20",
  linkedin: "https://www.linkedin.com/in/sachi-kaushik30/",
  gmail: "sk5476@columbia.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Build intelligent web and AI systems with React, Flask, and scalable backend APIs"
    ),
    emoji(
      "⚡ Deploy transformer models and real-time prediction pipelines on AWS and Databricks"
    ),
    emoji(
      "⚡ Automate deployment and monitoring with Docker, Kubernetes, and CI/CD"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // --- Core Programming & ML ---
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "Databricks", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "MLOps", fontAwesomeClassname: "fas fa-cogs"},

    // --- NLP & ML Libraries ---
    {skillName: "Transformers", fontAwesomeClassname: "fas fa-code-branch"},
    {skillName: "BERT", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "Pandas", fontAwesomeClassname: "fas fa-table"},

    // --- CV & Vision ---
    {skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera"},

    // --- Backend & Deployment ---
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired"},

    // --- Web Stack ---
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Flask", fontAwesomeClassname: "fas fa-flask"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2024 - December 2025",
      desc: "GPA: 3.52/4.0",
      descBullets: [
        "Coursework: LLM-based GenAI, Applied Machine Learning, Computer Vision, Natural Language Processing"
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "September 2020 - May 2024",
      desc: "GPA: 9.32/10.0",
      descBullets: [
        "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer Intern",
      company: "adMarketplace",
      companylogo: require("./assets/images/ampLogo.avif"),
      date: "June 2025 – Present",
      desc: "",
      descBullets: [
        "Building large-scale ad ranking and CTR models with transformers and real-time pipelines.",
        "Fine-tuned LLM for smarter query expansion and personalized ad matching."
      ]
    },
    {
      role: "Software Engineer",
      company: "Columbia Build Lab",
      companylogo: require("./assets/images/cblLogo.jpeg"),
      date: "Jan 2025 – May 2025",
      desc: "",
      descBullets: [
        "Integrated Flask–React modules for a dentist referral platform with reusable components.",
        "Collaborated in a lean startup team to design, scope, and deliver a data-driven MVP."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/techmLogo.png"),
      date: "May 2023 – Aug 2023",
      desc: "",
      descBullets: [
        "Created an AI chatbot to automate knowledge access and cut response times.",
        "Added a language model–based next-word prediction for users to speed up queries."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaborations, ideas, and conversations",
  number: "+92-0000000000",
  email_address: "sk5476@columbia.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
