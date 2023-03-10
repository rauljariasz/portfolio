import React from 'react';

//imgs
import Image from '../assets/animation.gif';
//icons
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiFrontendmentor } from 'react-icons/si';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <section id='home' className='min-h-[85vh] md:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary md:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] md:text-[110px]'>
              Raul <span>Arias</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] md:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-3'>I am a</span>
              <TypeAnimation sequence={[
                'Frontend',
                2000,
                'Developer',
                2000,
                ]}
                speed={25}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto md:mx-0'>
              Venezuelan Jr Front-end Developer.<br /> Constantly learning and building.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto md:mx-0'>
              <button className='btn btn-sm'>Contact me</button>
              <a href='https://github.com/rauljariasz' rel='noreferrer' target='_blank' className='text-gradient btn-link'>
                Download CV
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}  
            className='flex text-[30px] gap-x-6 max-w-max mx-auto md:mx-0'>
              <a href='https://www.linkedin.com/in/rauljariasz/' rel='noreferrer' target='_blank'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/rauljariasz' rel='noreferrer' target='_blank'>
                <FaGithub />
              </a>
              <a href='https://www.hackerrank.com/rauljariasz' target='_blank' rel='noreferrer'>
                <FaHackerrank />
              </a>
              <a href='https://www.frontendmentor.io/profile/rauljariasz' target='_blank' rel='noreferrer'>
                <SiFrontendmentor />
              </a>
              <a href='https://www.instagram.com/rauljariasz/' target='_blank' rel='noreferrer'>
                <AiFillInstagram />
              </a>
            </motion.div>
          </div>
          {/* Img */}
          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden md:flex flex-1 max-w-[320px] md:max-w-[482px]'>
            <img src={Image} alt='Animation gif' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;