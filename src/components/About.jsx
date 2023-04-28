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
          className='bg-about bg-contain bg-no-repeat h-[350px] bg-top lg:h-[600px] lg:w-1/2 dark:bg-aboutlight'
          >
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='flex-1 lg:w-1/2'>
            <h2 className='h2 text-accent'>ACERCA DE MÍ.</h2>
            <h3 className='h3 mb-4 dark:text-primary'>Soy un desarrollador front-end con 1 año de experiencia.</h3>
            <p className='mb-6 dark:text-primary'>Apasionado por el desarrollo web/movil y la tecnología. Actualmente tengo sólidos conocimientos como desarrollador frontend... Estoy constantemente estudiando, aprendiendo y experimentando con tecnologías/herramientas para encontrar las mejores soluciones... Buscando unirme a una empresa para contribuir al progreso del proyecto, aplicar/ mejorar mis habilidades y hacer crecer mi carrera.
            </p>
            {/* stats */}
            <div className='flex gap-x-8 items-center'>
              <Link 
              to='contact' 
              smooth={true} 
              activeClass='active' 
              spy={true} 
              className='cursor-pointer btn btn-lg flex items-center justify-center dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white'>
                Contáctame
              </Link>
              <a href='https://drive.google.com/file/d/1nwkZdE0bPKnT9csTklZUIN9pMbK-zQyL/view' rel='noreferrer' target='_blank' className='text-gradient btn-link dark:light-text-gradient'>
                Ver Currículum
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
