import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <h1 className="text-2xl tracking-wide text-black">Kantamneni Hrushikesh</h1>
          <p className="text-sm text-gray-600 tracking-wider">UX Designer</p>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Work', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-700 hover:text-black transition-colors duration-300 tracking-wide relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}