import React from 'react';

/* Icons */
import { DiScrum, DiHtml5, DiCss3, DiSass, DiReact, DiNpm, DiVisualstudio } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiWebpack } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

/* Imgs */
import imageSkill from '../assets/animation-skills.png';

const Skills = () => {
  const skills = [
    { 
      icon: <DiHtml5 />, 
      name: 'HTML5'
    }, 
    {
      icon: <DiCss3 />,
      name: 'CSS3'
    },
    {
      icon: <IoLogoJavascript />,
      name: 'JS'
    },
    {
      icon: <DiSass />,
      name: 'SASS'
    },
    {
      icon: <SiTailwindcss />,
      name: 'TAILWIND'
    },
    {
      icon: <DiReact />,
      name: 'REACT'
    },
    {
      icon: <TbBrandNextjs />,
      name: 'NEXT'
    },
    {
      icon: <FaGitAlt />,
      name: 'GIT'
    },
    {
      icon: <DiNpm />,
      name: 'NPM'
    },
    {
      icon: <SiWebpack />,
      name: 'WEBPACK'
    },
    {
      icon: <DiVisualstudio />,
      name: 'VSC'
    },
    {
      icon: <DiScrum />,
      name: 'SCRUM'
    },
  ]

  const renderSkills = skills.map((skill) => {
    return (
    <div key={`${skill.name}-1`} className='w-[100px] h-auto bg-white/10 rounded-lg flex flex-col items-center text-[60px] border-t-[2px] transition-all duration-300 ease-in hover:border-b-[2px] hover:border-white hover:border-t-[0px] hover:translate-y-[2px] hover:text-accent pt-[3px]'>
      {skill.icon}
      <p className='text-lg'>{skill.name}</p>
    </div>
    );
  })

  return (
    <section id='skills' className='lg:h-[90vh] flex items-center'>
      <div className='container mx-auto'>
        {/* Title */}
        <motion.h2 
        variants={fadeIn('right', 0.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.1}}
        className='h2 text-accent text-center lg:pb-[45px]'>Skills</motion.h2>

        {/* Content */}
        <div className='flex flex-col gap-y-10 items-center justify-center lg:flex-row  lg:gap-x-20 lg:gap-y-0'>
          {/* Text&Img */}
          <motion.div 
          variants={fadeIn('right', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='lg:w-1/2'>
            <p>
            During my apprenticeship as a front-end Developer I have learned various skills in the following technologies, it should be noted that, to this day, I continue to learn and build to improve my skills every day. Skills and tools:
            </p>
            <img src={imageSkill} alt='Illustration' className='hidden lg:block' />
          </motion.div>

          {/* Skills */}
          <motion.div 
          variants={fadeIn('right', 0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='lg:w-1/2 gap-y-5 grid grid-cols-3 justify-items-center w-full'>
            {renderSkills}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;