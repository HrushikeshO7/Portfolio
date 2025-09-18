import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )
          `
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-4 text-white">Kantamneni Hrushikesh</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              UX Designer passionate about creating meaningful digital experiences 
              that solve real problems and delight users.
            </p>
           
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Work', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 
                             text-sm block py-1"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {['UX Design', 'UI Design', 'Prototyping', 'Design Systems'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm block py-1">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 text-center"
        >
        <div className="mt-2">
  <p className="text-gray-400 text-sm italic">
    "Design is not just what it looks like and feels like. Design is how it works."
  </p>
  <p className="text-gray-500 text-xs mt-1 text-right">
    — Steve Jobs
  </p>
</div>

        </motion.div>
      </div>
    </footer>
  );
}