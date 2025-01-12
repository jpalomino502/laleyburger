import { motion } from 'framer-motion';
import { Phone, Instagram, Facebook } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold mb-4">LaleyBurger</h3>
            <p className="text-neutral-400">Las mejores hamburguesas artesanales de Bucaramanga.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold mb-4">Horario</h4>
            <p className="text-neutral-400">Lunes a Domingo</p>
            <p className="text-neutral-400">12:00 PM - 10:00 PM</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-neutral-400">Tel: (57) 300-123-4567</p>
            <p className="text-neutral-400">Email: info@laleyburger.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <Phone className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/laleyburger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/laleyburger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@laleyburger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p>&copy; {new Date().getFullYear()} LaleyBurger. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
