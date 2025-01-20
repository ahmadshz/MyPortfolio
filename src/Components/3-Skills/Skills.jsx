import { useState } from 'react'
import { SKILLS } from '../../1-Utils/data'
import CardInfoSkills from './CardInfoSkills/CardInfoSkills'
import CardSkils from './cardSkills/CardSkils'
import './Skills.css'
import { AnimatePresence, motion } from 'framer-motion'

const Skills = () => {
  const [selectedInfo, setSelectedInfo] = useState(SKILLS[0])

  const handelCardInfo = (data) => {
    setSelectedInfo(data);
  }
  return (
    <section className='skills-container' style={{ minHeight: '75vh' }}>
      <h1 className='title-skils'>My Skills</h1>
      <div className='main-skills'>
        <div className='skills-content'>
          {
            SKILLS.map((item, idx) => (
              <CardSkils
                key={idx}
                title={item.title}
                icon={item.icon}
                isActive={selectedInfo.title === item.title}
                onClick={() => handelCardInfo(item)}
              />
            ))
          }
        </div>
        <div className='skills-info'>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedInfo.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <CardInfoSkills
                header={selectedInfo.title}
                skils={selectedInfo.skills}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Skills
