import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale:0.8 },
    visible: { opacity: 1, scale: 1},
};

const Project = ({ title, description, liveUrl, sourceCodeUrl }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <span className="text-black text-base mb-2 mt-2">{description}</span>
                    <a href={`${liveUrl}`} target="_blank" rel="noopener noreferrer">
                        <button className="bg-red p-2 rounded-md mt-2 mb-2">
                            <p className="text-white">See live code</p>
                         </button>
                    </a>
                    <a href={`${sourceCodeUrl}`} target="_blank" rel="noopener noreferrer">                    
                        <button className="bg-red p-2 rounded-md">
                        <p className="text-white">See source code</p>
                        </button>
                    </a>
            </div>            
            <img src={`../assets/${projectTitle}.webp`} alt={projectTitle} />       
        </motion.div>
    );
};

const Projects = () => {

    const projectData = [ 
        {
            title: "Project 1",
            description: "Informative site for a conference of programing directed to mothers and kids. Programming language used JavaScript, for styling CSS3 and linters to fix technical issues.",
            liveUrl: "https://ivonnebenitesrodriguez.github.io/capstone-project/index.html#main-program",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/capstone-project"
        },
        {
            title: "Project 2",
            description: "Mobile and desktop portfolio developed using JavaScript and CSS3, following the guidelines provided by Figma.",
            liveUrl: "https://boisterous-sprinkles-3b9890.netlify.app/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio"
        },
        {
            title: "Project 3",
            description: "An affirmation journal featuring the current time, date, random daily quotes, and the ability for users to add their own inputs. HTML5 is utilized for structure, CSS3 for styling, and JavaScript for the functionality of the application.",
            liveUrl: "https://thriving-arithmetic-4d30eb.netlify.app/",
             sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/AffirmationsJournal"            
        },
        {
            title:'Project 4',
            description: "Responsive Hotel Booking App built with React, Redux, Ruby on Rails,PostgreSQL and CSS3",
            liveUrl: "https://luminous-semolina-e113b8.netlify.app/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/finalGroupCapstone-frontend"
        },
        {
            title: 'Project 5',
            description: "Welcome to my online resume, constructed using HTML5 for the structure and CSS3 for the styling.",
            liveUrl: "https://ivonnebenitesrodriguez.github.io/homepage/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/homepage?tab=readme-ov-file"
        },
        {
            title: 'Project 6',
            description: "University residence site built with PHP, HTML5, CSS3, and JavaScript. Users can read it in a mobile device, ipad, and laptop.",
            liveUrl:"https://visionary-moxie-cef3b4.netlify.app/",
            sourceCodeUrl:"https://github.com/IvonneBenitesRodriguez/informationTouristGuideJesusMaria"
        },
        {
            title: 'Project 7',
            description: "This is a mobile web app built using React, Redux and an API named restcountries. This mobile web application allows users to get information about demographic data for all continents.",
            liveUrl:"https://metrics-webapp-project-microverse.onrender.com/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/metrics-webapp-project"
        },
        {
            title: 'Project 8',
            description: "This is an informative site about a shop which sells bach's flowers built using HTML5, PHP, CSS and JavaScript.",
            liveUrl:"https://elegant-pegasus-c171b8.netlify.app/",
            sourceCodeUrl:"https://github.com/IvonneBenitesRodriguez/terapiasbachsite"
        },
    ]
    return (
        <section id="projects" className="pt-48 pb-48">
            <motion.div
            className="md:w-2/5 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y:-50 },
                visible: { opacity: 1, y:0 },
            }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    These are my projects
                </p>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                 className="sm:grid sm:grid-cols-3"
                 variants={container}
                //  initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }}
                >
                    {projectData.map((project, index) => (
                        <Project
                          key={index}
                          title={project.title}
                          description={project.description}
                          liveUrl={project.liveUrl}
                          sourceCodeUrl={project.sourceCodeUrl}
                        />
                    ))}
            <div
              className="flex justify-center text-center items-center p-12 bg-red
              max-w-[400px] max-h-[700px] text-2xl font-playfair font-semibold"
            >
                BEAUTIFUL CRAFTED PROJECTS
            </div>
        </motion.div>
    </div>
</section>
);
};

export default Projects;