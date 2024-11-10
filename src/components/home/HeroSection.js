import { motion } from 'framer-motion';
import sticker from '../../assets/sticker.png';

export default function HeroSection({ scrollTo }) {
  return (
    <section id="inicio" className="relative h-screen flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10" // Added flex-col-reverse for small screens and flex-row for large screens
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left flex-1">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            La ley Burger
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Las mejores hamburguesas artesanales de Bucaramanga. Ingredientes frescos y sabor incomparable.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ordenar Ahora
            </motion.button>
            <motion.button 
              className="border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('menu')}
            >
              Ver Menú
            </motion.button>
          </motion.div>
        </div>
        
        <div className="flex-shrink-0">
          <motion.img
            src={sticker}
            alt="Sticker"
            className="w-40 sm:w-60 lg:w-80 h-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
