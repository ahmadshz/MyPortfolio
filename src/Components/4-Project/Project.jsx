
import './Project.css';
import img from '../../assests/project.jpg';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { MyProject } from '../../1-Utils/data';
import { AnimatePresence, motion } from 'framer-motion';



const Project = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (category) => {
    setSelected(category);
  };


  // 
  const categories = Array.from(new Set(MyProject.flatMap((project) => project.category)));

  return (
    <main >
      <h1 className='title-project'>My Project</h1>
      <div className='main' style={{minHeight:' 75vh'}}>
        {/* Left section show button */}
        <section className="left-section">
          <button
            onClick={() => handleSelected(null)}
            className={selected === null ? 'active' : ''}
          >
            All Projects
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleSelected(category)}
              className={selected === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Right  section show card */}
      
        
        <section>
          <article className="right-section" >
            <AnimatePresence mode="wait">
              {(selected === null
                ? MyProject
                : MyProject.filter((item) => item.category.includes(selected))
              ).map((item, index) => (
                <motion.div
                  key={item.id || index} // Ensure each item has a unique key
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ width: '266px' }}
                >
                  <motion.img
                    className="img-0"
                    src={item.imgPath ? item.imgPath : img}
                    alt={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h1 className="title">{item.name}</h1>
                    <p className="Sub-title">{item.desc}</p>
                    <div className="icons">
                      {item.github && (
                        <a href={item.github} className="more">
                          <FaGithub size={20} />
                        </a>
                      )}
                      <a href={item.link} className="more">
                        more <FaArrowRight style={{ marginLeft: '3px' }} />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </article>
        </section>
        
      </div>
    </main>
  );
};

export default Project;
