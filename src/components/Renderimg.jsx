import { useEffect, useState } from 'react';
import Image from '../assets/animation.gif';
import Prueba from '../assets/animation-skills.png'


  const Renderimg = () => {
    const html = document.querySelector('html')
    const [ligthMode, setLightMode] = useState(false)

  useEffect(() => {
    if (!html.classList.contains('dark')) {
      setLightMode(true)
      console.log('lol');
    } else {
      setLightMode(false)
      console.log('lol');
    }
  },[ligthMode, html.classList])

    if (ligthMode) {
      return (
        <img src={Prueba} alt='Animation gif'/>
      )
    } else {
      <img src={Image} alt='Animation gif'/>
    }
  }

export default Renderimg;