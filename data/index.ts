export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS app",
    description: "Learning Management App",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zentry Website Redesign",
    des: "A complete redesign of the award-winning Zentry website focused on enhanced UX, modern visuals, and responsive design to reflect a sleek digital presence.",
    img: "/zentry.svg", 
    iconLists: ["/re.svg", "/tail.svg", "/gsap.svg", "/three.svg"], // Add/remove tools you used
    link: "https://mini-zentry-design.vercel.app/",
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    des: "An AI-powered tool that analyzes resumes to provide tailored feedback, job match suggestions, and improvement tips using NLP and machine learning.",
    img: "/resume-analyzer.svg", 
    iconLists: ["/react-router.svg", "/tail.svg", "/re.svg", "/clerk.svg"], // Adjust based on stack
    link: "https://ai-resume-analyzer-nu-coral.vercel.app/", 
  },
  {
    id: 3,
    title: "React Syncfusion Admin Dashboard",
    des: "A dynamic and modular admin dashboard built using React and Syncfusion UI library with features like analytics, charts, and theme support.",
    img: "/dashboard.svg", 
    iconLists: ["/re.svg", "/tail.svg", "/syncfusion.svg"],
    link: "https://react-dashboard-zeta-rust.vercel.app/", 
  },
  {
    id: 4,
    title: "AI Code Generator",
    des: "A web-based AI code assistant that takes user input and generates code snippets in real-time using OpenAI's Codex API for multiple languages.",
    img: "/ai-code.svg", 
    iconLists: ["/Python.svg", "/FastAPI.svg", "/re.svg", "/clerk.svg", "/openai.svg"], // Add/remove depending on stack
    link: "https://code-challenge-generator-mu.vercel.app/", 
  },
];

export const testimonials = [
  {
    quote:
      "Working with Isreal on the college feedback system was a game-changer. He understood our needs perfectly and delivered a solution that was both user-friendly and efficient. His attention to detail and clear communication made the whole process seamless.",
    name: "Oluwatobiloba Boluwatife",
    title: "Department Representative, College of Science & Tech",
  },
  {
    quote:
      "Isreal built a powerful visitor management app for our institution. The interface was sleek, and the functionality was spot-on. His technical skills and problem-solving mindset really impressed me. I would definitely recommend him for any software project.",
    name: "Omonoh",
    title: "IT Support Officer, Admin Unit",
  },
  {
    quote:
      "I’m really impressed by the attendance management system Isreal developed for us. It was reliable, easy to use, and saved us countless hours of manual tracking. His dedication to delivering quality work in record time is unmatched.",
    name: "Feranmi",
    title: "Student Leader, Faculty of Management Sciences",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity and improving user experience across devices.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Software Developer",
    desc: "Delivered multiple full-stack projects for various clients, including dashboards, management systems, and automation tools tailored to business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Intern – Alabian Solutions",
    desc: "Collaborated with the engineering team to design and implement backend logic for client applications, focusing on efficiency, security, and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg", // Add your own thumbnail image
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Jeezlouis",
  },
  {
    id: 2,
    img: "/x.svg",
    link: "https://x.com/_isreallawal",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/isreal-lawal-628924279",
  },
  {
    id: 4,
    img: "/instagram.svg",
    link: "https://www.instagram.com/isreal_lawal/",
  },
];
