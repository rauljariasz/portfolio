//icons
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiFrontendmentor } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
/* link */
import { Link } from 'react-scroll'

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
            className='text-[55px] font-bold leading-[0.8] md:text-[110px] dark:text-primary'>
              Raul Arias
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] md:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <TypeAnimation sequence={[
                'Frontend Developer',
                2000,
                'Desarrollador Web',
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
            className='mb-8 max-w-lg mx-auto md:mx-0 dark:text-primary'>
              Construyamos juntos la pagina/aplicacción que deseas.<br /> Aragua, Venezuela 📍.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto md:mx-0'>
              <Link 
              to='contact' 
              className='cursor-pointer btn btn-lg flex items-center justify-center dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white' 
              smooth={true} 
              activeClass='active' 
              spy={true}>
                Contáctame
              </Link>
              <a href='https://drive.google.com/file/d/1Fo6kOYQvDK6CuI9iSxMWyv-7yZ9ohxeH/view' rel='noreferrer' target='_blank' className='text-gradient btn-link dark:light-text-gradient'>
                Ver Currículum
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
                <FaLinkedin className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
              <a href='https://wa.me/qr/7HNPJPAPNTXYJ1' rel='noreferrer' target='_blank'>
              <IoLogoWhatsapp className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
              <a href='https://www.instagram.com/rauljariasz/' target='_blank' rel='noreferrer'>
                <AiFillInstagram className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
              <a href='https://github.com/rauljariasz' rel='noreferrer' target='_blank'>
                <FaGithub className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
              <a href='https://www.hackerrank.com/rauljariasz' target='_blank' rel='noreferrer'>
                <FaHackerrank className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
              <a href='https://www.frontendmentor.io/profile/rauljariasz' target='_blank' rel='noreferrer'>
                <SiFrontendmentor className='dark:text-accent hover:translate-y-2 transition-all' />
              </a>
            </motion.div>
          </div>
          {/* Img */}
          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='bg-illushome hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] min-h-[330px] h-[560px] bg-contain bg-no-repeat bg-center dark:bg-lighthomeillus'>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;