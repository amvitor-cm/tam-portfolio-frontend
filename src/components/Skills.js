import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="text-2xl font-bold gradient-text mb-2">{skill}</div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div 
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "90%" } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Git/GitHub',
    'Responsive Design',
    'API Integration',
    'Web3',
    'Framer Motion'
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-secondary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Technologies I use to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
