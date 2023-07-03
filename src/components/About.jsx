import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import somoy from "../assets/somoy.jpeg"
import { fadeIn, textVariant } from "../utils/motion";
import Downbutton from "./Downbutton";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <ParallaxTilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
      >
      <img
          src={icon}
          alt='web-development'
          className='object-contain w-16 h-16'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </ParallaxTilt>
    </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        
      </motion.div>

    <div className="flex items-center"> 
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
 
      </motion.p>
      
      <motion.p> <img src={somoy} alt="somoy" className="border-4 rounded-full border-violet-700" /></motion.p>
    </div>
    <Downbutton > </Downbutton>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");