import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download } from 'lucide-react';
import Resume from './Files/Kantamneni Hrushikesh_Resume.pdf';
import image from './Files/Kantamneni Hrushikesh.jpg';
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Textured background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0),
            linear-gradient(45deg, #f9f9f9 25%, transparent 25%, transparent 75%, #f9f9f9 75%),
            linear-gradient(-45deg, #f9f9f9 25%, transparent 25%, transparent 75%, #f9f9f9 75%)
          `,
          backgroundSize: '20px 20px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 20px 20px'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl mb-6 tracking-tight text-black"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Crafting Digital
            <span className="block text-gray-600">Experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I'm a UX designer passionate about creating intuitive, beautiful, and user-centered digital products that solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 tracking-wide shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-black hover:text-black transition-all duration-300 tracking-wide"
            >
           <a href={Resume} target="_blank" 
    rel="noopener noreferrer"className="flex items-center gap-2">
           
              View my Resume
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <ImageWithFallback
                src={image}
                alt="Alex Rivera - UX Designer"
                className="w-80 h-80 object-cover rounded-full shadow-2xl"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cream rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-40 blur-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}