import { motion } from 'motion/react';
import { Github, Linkedin, Figma} from 'lucide-react';

export default function About() {
  const skills = [
    "User Research", "Wireframing", "Prototyping",
    "Interaction Design", "Design Systems", "Figma",
      "Adobe Illustrator"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Subtle linen texture background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.03) 1px,
              rgba(0,0,0,0.03) 2px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.03) 1px,
              rgba(0,0,0,0.03) 2px
            )
          `,
          backgroundSize: '8px 8px'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-6 text-black tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6 text-black">Passionate About Design</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
             I am a UX designer passionate about creating intuitive and engaging digital experiences. Through multiple UX case studies, I have honed my skills in user research, prototyping, and crafting interfaces that are both functional and visually compelling.

            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I believe great design should feel seamless and natural to users while effectively solving real problems. Every case study I work on begins with understanding users’ needs and translating those insights into thoughtful, elegant solutions. My goal is to create experiences that delight users and make a meaningful impact.
            </p>
            
            
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6 text-black">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 
                           hover:border-black hover:text-black transition-all duration-300 cursor-default
                           shadow-sm hover:shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-cream/30 rounded-lg border border-gray-100">
              <h4 className="mb-3 text-black">My Design Philosophy</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "Design is not just what it looks like and feels like. Design is how it works."
                <br/><br/>
                I always believe that a designer has the power to attract, engage, and delight users through thoughtful and purposeful design. My goal is to create experiences that are not only beautiful but also functional, accessible, and meaningful.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Connect with me:</span>
                <div className="flex gap-3">
                  <motion.a href="https://linkedin.com/in/hrushi2004" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md" > <Linkedin size={18} /> </motion.a>
                  <motion.a href="https://www.figma.com/@Hrushi2004" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md" > <Figma size={18} /> </motion.a>
                  <motion.a
                    href="https://github.com/Hrushi2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full 
                             border border-gray-200 hover:border-black hover:bg-black hover:text-white 
                             transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Github size={18} />
                  </motion.a>
                  
                  
                  
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}