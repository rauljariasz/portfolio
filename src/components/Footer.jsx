/* icons */
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='h-[280px] sm:h-[250px] bg-accent/30 mt-[50px] dark:bg-accent'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center '>
          <h2 className='h2 pt-[20px] text-[22px] mb-[7px]'>Portfolio</h2>
          <p>Gracias por visitar mi portafolio personal. Conéctate conmigo a través de las redes sociales.</p>
          <div
          className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/rauljariasz/' rel='noreferrer' target='_blank'>
              <FaLinkedin />
            </a>
            <a href='https://wa.me/qr/7HNPJPAPNTXYJ1' rel='noreferrer' target='_blank'>
              <IoLogoWhatsapp />
            </a>
            <a href='https://www.instagram.com/rauljariasz/' target='_blank' rel='noreferrer'>
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;