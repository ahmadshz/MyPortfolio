import './hero.css'
import animation from '../../assests/animation/LotifieAnimation'
import js from '../../assests/language/js.png'
import react from '../../assests/language/react.png'
import html from '../../assests/language/html1.jpg'
import css from '../../assests/language/css.png'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section className='hero'>
      <motion.div
        className="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I&#39;m
        </motion.h1>
        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Ahmad Shmait
        </motion.h1>
        <motion.div
          className="dynamic-txt"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text">FrontEnd Developer</h3>
        </motion.div>

        <motion.a
          className="Contact-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          href='/public/PDF/AhmadShmeit.pdf'
          download="Ahmed_Shamet_CV.pdf" 
          style={{textDecoration:'none'}}
        >
          Download My CV
        </motion.a>
      </motion.div>

      <motion.div className='content-lottie'
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <Lottie className='lottie' animationData={animation} loop={true} />

        <div> <img className='img-1' src={react} alt='' />
          <img className='img-2' src={js} alt='' />
          <img className='img-3' src={html} alt='' />
          <img className='img-4' src={css} alt='' /></div>

      </motion.div>
    </section>
  )
}

export default Hero
