import { useRef } from 'react';
/* EmailsJS */
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
/* icons */
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'



const ContactUs = () => {
  const form = useRef();
  const formDiv = useRef();
  const tyDiv = useRef();

  const hideFormDiv = () => {
    formDiv.current.classList.add('hidden')
    tyDiv.current.classList.add('flex')
    tyDiv.current.classList.remove('hidden')
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebenivs', 'template_jh0np6f', form.current, 'tXFVXq5LhAGqQoWKT')
      .then((result) => {
          console.log(result.text);
          hideFormDiv();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.1}}
          className='h2 text-accent text-center pt-[45px]'>
            Contáctame
        </motion.h2>


        <motion.div 
        variants={fadeIn('up', 0.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.1}}
        className='flex flex-col h-[75vh] w-full max-w-[800px] mx-auto border-y-[2px] border-white rounded-xl bg-black md:flex-row dark:bg-white dark:border-[2px] dark:border-accent'
        ref={formDiv}>
          {/* Image */}
          <div className='flex justify-center w-[235px] items-center pt-[10px] h-[234px] md:w-1/2 md:h-[340px] bg-email bg-contain bg-no-repeat bg-center self-center dark:bg-lightemail'>
          </div>
          {/* Form */}
          <div className='md:w-1/2 h-[60%] md:h-full'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-[15px] justify-center items-center h-full'>
            <div className='w-[80%] h-[40px] relative'>
              <input 
              required
              type="text" 
              name="user_name" 
              placeholder='Tu nombre'
              className='text-white font-semibold pl-[40px] h-full w-full onFocus peer/name dark:bg-primary/40 dark:text-accent placeholder:text-primary' />
              <i className='absolute text-white/50 text-[18px] left-[15px] top-[10px] peer-focus/name:text-accent'>
                <FaUser  />
              </i>
            </div>
            <div className='w-[80%] h-[40px] relative'>
              <input 
              required
              type="email" 
              name="user_email" 
              placeholder='Tu correo'
              className='text-white font-semibold pl-[40px] h-full w-full onFocus peer/email dark:bg-primary/40 dark:text-accent placeholder:text-primary' />
              <i className='absolute text-white/50 text-[21px] left-[15px] top-[10px] peer-focus/email:text-accent'>
                <MdEmail  />
              </i>
            </div>
            <textarea required name="message" placeholder='Mensaje' className='resize-none onFocus rounded-xl w-[80%] scrollbar-none sm:h-[200px] dark:bg-primary/40 dark:text-accent placeholder:text-primary' />
            <input type="submit" value="Enviar" className='cursor-pointer btn btn:hover w-[120px] dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white' />
          </form>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.1}}
        className='flex-col h-[75vh] w-full max-w-[800px] mx-auto border-y-[2px] border-white rounded-xl bg-black hidden dark:bg-white dark:border-[2px] dark:border-accent'
        ref={tyDiv}>
          <div className='w-full text-center pt-[10px]'>
            <p className='dark:text-primary'>
              E-mail Enviado.
            </p>
          </div>

          <div className='flex justify-center items-center h-full'>
            <div className='w-[330px] h-[330px] bg-emailsend bg-contain bg-no-repeat dark:bg-lightemailsend'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;