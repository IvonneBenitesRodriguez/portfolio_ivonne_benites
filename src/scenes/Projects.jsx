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

const Project = ({ title, liveUrl, sourceCodeUrl }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <a href={`${liveUrl}`}>
                        <button className="bg-red p-2 rounded-md mt-2 mb-2">
                            <p className="text-white">See live code</p>
                         </button>
                    </a>
                    <a href={`${sourceCodeUrl}`}>                    
                        <button className="bg-red p-2 rounded-md">
                        <p className="text-white">See source code</p>
                        </button>
                    </a>
            </div>            
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />       
        </motion.div>
    );
};

const Projects = () => {

    const projectData = [ 
        {
            title: "Project 1",
            liveUrl: "https://ivonnebenitesrodriguez.github.io/capstone-project/index.html#main-program",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/capstone-project"
        },
        {
            title: "Project 2",
            liveUrl: "https://boisterous-sprinkles-3b9890.netlify.app/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/microverse_mobile_portfolio"
        },
        {
            title: "Project 3",
            liveUrl: "https://thriving-arithmetic-4d30eb.netlify.app/",
             sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/AffirmationsJournal"            
        },
        {
            title:'Project 4',
            liveUrl: "https://luminous-semolina-e113b8.netlify.app/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/finalGroupCapstone-frontend"
        },
        {
            title: 'Project 5',
            liveUrl: "https://ivonnebenitesrodriguez.github.io/homepage/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/homepage?tab=readme-ov-file"
        },
        {
            title: 'Project 6',
            liveUrl:"https://visionary-moxie-cef3b4.netlify.app/",
            sourceCodeUrl:"https://github.com/IvonneBenitesRodriguez/informationTouristGuideJesusMaria"
        },
        {
            title: 'Project 7',
            liveUrl:"https://metrics-webapp-project-microverse.onrender.com/",
            sourceCodeUrl: "https://github.com/IvonneBenitesRodriguez/metrics-webapp-project"
        },
        {
            title: 'Project 8',
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