import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../../assets/logo.webp'

export default function Navbar({ scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-black/90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[85px]">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >

            <img 
              src={logoImage} 
              alt="LaleyBurger Logo"
              className="h-20"
            />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['inicio', 'menu', 'ubicaciones'].map((section, index) => (
              <motion.a 
                key={index}
                href={`#${section}`} 
                className="hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => { e.preventDefault(); scrollTo(section); }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            <motion.button 
              className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ordenar Ahora
            </motion.button>
          </div>

          <motion.button 
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'menu', 'ubicaciones'].map((section, index) => (
                <motion.a 
                  key={index}
                  href={`#${section}`} 
                  className="block px-3 py-2 hover:text-yellow-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => { e.preventDefault(); scrollTo(section); }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
              <motion.button 
                className="w-full text-left px-3 py-2 text-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ordenar Ahora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
