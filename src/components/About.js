import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

/*  */
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-auto'>
          {/* img */}
          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='bg-about bg-contain bg-no-repeat h-[350px] bg-top lg:h-[600px] lg:w-1/2'
          >
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='flex-1 lg:w-1/2'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with about 1 year of experience.</h3>
            <p className='mb-6'>
            I'm a Full Stack Developer <span className='text-accent font-bold'>student</span>, passionate about web development and technology. Currently I've solid knowledge as a frontend developer... I'm constantly studying, learning and experimenting with technologies/tools to find the best solutions...  Looking to join a company to contribute to the progress of the project, apply/improve my skills and grow up my career.
            </p>
            {/* stats */}
            <div className='flex gap-x-8 items-center'>
              <Link 
              to='contact' 
              smooth={true} 
              activeClass='active' 
              spy={true} 
              className='cursor-pointer btn btn-lg flex items-center justify-center'>
                Contact me
              </Link>
              <a href='https://github.com/rauljariasz' rel='noreferrer' target='_blank' className='text-gradient btn-link'>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
