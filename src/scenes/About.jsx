import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="about" className="pt-10 pb-14">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-3/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50 },
                        visible: { opacity: 1, x:0},
                    }}
                    >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        ABOUT <span className="text-red">ME</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7 text-center text-justify">
                    Hello there!

        I'm thrilled to share my journey with you!

        As a Hotel Entrepreneur, I founded a sought-after university residence, achieving a remarkable 90% occupancy rate through strategic partnerships.

        With a Bachelor's Degree in Marketing, I've delved into areas like Branding, SEO, and Content Marketing, gaining invaluable insights.

        Amidst the pandemic, I transitioned into the Software Development Industry, mastering HTML5, CSS3, JavaScript, React, and more. My GitHub profile boasts around 40 projects, 170 Pull Requests, and 1.8k commits, reflecting my dedication.

        An active learner, I continually seek to expand my skills and knowledge.

        My entrepreneurial background, coupled with tech and marketing expertise, equips me with a versatile skill set. Whether it's communication, problem-solving, or project management, I bring a holistic approach.

        I thrive on challenges and innovation. If you're seeking a dynamic developer or exploring collaborations, I'd love to connect!    
                        </p>
                    </motion.div>
            </div>
            <div className="flex flex-col justify-center gap-10 mt-10 md:flex-row">
              <a
                href="https://docs.google.com/document/d/18Qoq9xFeUkKkz8kKzmV_UBDMBC8uR-ug/edit"
                className="p-4 px-8 text-black bg-gradient-to-r from-blue-500 to-violet-600 text-lg flex justify-center items-center gap-1 rounded-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-base bg-white rounded-md pt-2 pb-2 pr-2 pl-2">
                DOWNLOAD CV
                </button>
              </a>
            </div>
                
        </section>
    );
};

 export default About;
