import './App.css'
import Hero from './Components/2-Hero/Hero'
import Navbar from './Components/1-Navbar/Navbar'
import Skills from './Components/3-Skills/Skills'
import Project from './Components/4-Project/Project'
import Contact from './Components/5-Contact/Contact'
import Footer from './Components/6-Footer/Footer'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [scrollBtn, setScrollBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScrollBtn(true)
      } else {
        setScrollBtn(false)
      }
    })
  }, [])

  return (
    <motion.div
      id="up"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="container">
        {/* Hero Section */}
        <motion.div
          id="hero"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Project />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      <motion.a
        href="#up"
        style={{
          opacity: scrollBtn ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollBtn ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <MdOutlineKeyboardDoubleArrowUp className="arrow" width={200} />
      </motion.a>
    </motion.div>
  )
}

export default App
