import React from 'react';

/* Flowbite */
import { Carousel } from 'flowbite-react';

// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

/* icons */
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { DiReact, DiSass } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandNextjs } from 'react-icons/tb'

/* Imgs */
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const Projects = () => {
  const projects = [
    {
      titulo: 'Portfolio',
      image: project1,
      description: 'Personal project carried out with the purpose of offering my services as a developer.',
      liveSite: '#',
      codeSite: 'https://github.com/rauljariasz/portfolio',
      /* Max 4 */
      buildWith: [<DiReact/>, <SiTailwindcss/>, <TbBrandFramerMotion />]
    },
    {
      titulo: 'FM Library',
      image: project2,
      description: 'FM Library is a personal project, made to show all my challenges in Frontend-Mentor, on a single page.',
      liveSite: 'https://frontendmentor-library.vercel.app/',
      codeSite: 'https://github.com/rauljariasz/FrontendMentor-Library',
      /* Max 4 */
      buildWith: [<TbBrandNextjs/>, <DiReact />, <DiSass/>]
    }
  ]
  let skillkey = 0;
  const renderProjects = projects.map((project) => {
    return (
      <div key={`${project.titulo}-1`} className="flex flex-col h-full w-full items-center justify-start bg-black/50">
        <h3 className='text-gradient pt-[10px]'>{project.titulo}</h3>
        <div className='md:h-[65%]'>
          <div className='flex flex-col md:flex-row md:p-[20px] md:gap-[10px]'>
            <img src={project.image} alt='' className='w-[320px] border-[1px] border-white/30 rounded-lg md:w-[60%]' />
            <div className='flex flex-col md:w-[40%] md:justify-evenly'>
              <div className='hidden md:block'>
                <p>
                  {project.description}
                </p>
              </div>
              <div className='flex justify-evenly w-full h-[46px] mt-[20px]'>
                <a href={project.liveSite} target='_blank' rel='noreferrer' className='h-full w-auto'>
                  <button className='btn h-full w-[140px] btn:hover'>Live Site</button>
                </a>
                <a href={project.codeSite} target='_blank' rel='noreferrer' className='h-full w-auto'>
                  <button className='btn h-full w-[140px] btn:hover'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full text-center lg-[h-35%]'>
          <p className='font-semibold mt-[15px]'>Build with</p>
          <div className='flex overflow-x-scroll scrollbar-hide mt-[15px] justify-evenly'>
            {project.buildWith.map(skill => {
              return (
                <div key={`key-${skillkey += 1}`} className='w-auto h-auto text-[60px]'>
                  {skill}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  })

  return (
    <section id='projects'>
      <div className='container mx-auto'>
        <motion.h2 
        variants={fadeIn('left', 0.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.1}}
        className='h2 text-accent text-center pt-[45px]'>
          PROJECTS
        </motion.h2>

        {/* Carousel */}
        <motion.div 
        variants={fadeIn('left', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.1}}
        className="h-[75vh] w-full max-w-[800px] mx-auto border-y-[2px] border-white/30 rounded-xl">
          <Carousel 
          slide={false} 
          indicators={false} 
          leftControl={<div className='text-[30px] text-accent bg-white rounded-lg'><AiFillCaretLeft /></div>}
          rightControl={<div className='text-[30px] text-accent bg-white rounded-lg'><AiFillCaretRight /></div>}>
            {renderProjects}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;