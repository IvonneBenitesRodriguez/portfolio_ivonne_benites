import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const frontendSkills = [
        "css.png", "bootstrap.png", "eslint.png", "html.png", "cubo.png", "figma.png", "tailwind.jpeg", "react.png"
    ];
    const backendSkills = [
        "postman.png", "rails.jpeg", "reactrouter.png", "redux.png", "rubocop.png", "ruby.jpeg"
    ];
    const otherSkills = [
        "slack.png", "zoom.jpeg", "visual-studio-code.png", "terminal.png", "postgreSQL.png", "sql.png", "git.png"
    ];

    return (
        <section id="skills" className="pt-10 pb-24">
            <div className="md:flex md:justify-between md:gap-16 mt-2">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0},
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-3">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-3">
                        My Frontend skills:
                    </p>
                    <div className="md:flex md:justify-between md:gap-2 mt-4">
                        {frontendSkills.map(skill => (
                            <img
                                key={skill}
                                alt="Frontend skill"
                                className="z-10"
                                src={`assets/${skill}`}
                                style={{ width: '20%', maxWidth: '20rem', height: 'auto'}}
                            />
                        ))}
                    </div>
                </motion.div>
            </div> 
            <div className="md:flex md:justify-between md:gap-2 mt-4">    
                <div className="md:w-1/3">
                        <p className="mt-10 mb-3">
                            My Backend skills:
                        </p>
                        <div className="md:flex md:justify-between md:gap-4 mt-2">
                            {backendSkills.map(skill => (
                                <img
                                    key={skill}
                                    alt="Backend skill"
                                    className="z-10"
                                    src={`assets/${skill}`}
                                    style={{ width: '20%', maxWidth: '20rem', height: 'auto', margin: '1rem' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between md:gap-4 mt-2">
                    <div className="md:w-1/3">
                            <p className="mt-10 mb-3">
                                Other skills:
                            </p>
                            <div className="md:flex md:justify-between md:gap-4 mt-4">
                                {otherSkills.map(skill => (
                                    <img
                                        key={skill}
                                        alt="Other skill"
                                        className="z-10"
                                        src={`assets/${skill}`}
                                        style={{ width: '20%', maxWidth: '20rem', height: 'auto', margin: '1rem' }}
                                    />
                                ))}
                            </div>
                    </div>
                </div>                
        </section>
    );
};

export default MySkills;
