import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-secondary"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                I’m a frontend developer who enjoys building clean, modern, and responsive web applications. I work
                with React, Next.js, and other current web technologies.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating interfaces 
                that are not only visually stunning but also highly functional and 
                accessible. Every project is an opportunity to push boundaries and 
                deliver something remarkable.
              </p>

              <p>
                When I'm not coding, I'm exploring the latest web trends, contributing 
                to open-source projects, or learning about emerging technologies in the 
                frontend ecosystem.
              </p>
            </motion.div>

            {/* Tech Focus */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center glass rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text mb-2">Frontend</div>
                <div className="text-gray-300 text-sm">Specialist</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text mb-2">Modern</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-dark rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-3 overflow-hidden">
                <Image
                  src="https://i.postimg.cc/gj5N2Cvc/work_pic.png"
                  alt="Development Work"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Innovation</h3>
                    <p className="text-gray-300">Driven by creativity and modern solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
