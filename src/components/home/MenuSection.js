import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menuItems } from '../../data/menuItems';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuSection = () => {
  const [activeMenuCategory, setActiveMenuCategory] = useState('Hamburguesas');
  
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <section id="menu" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestro Menú
        </motion.h2>

        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            containerClass="carousel-container mx-auto w-3/4"
            itemClass="carousel-item flex justify-center"
            arrows={false}
          >
            {Object.keys(menuItems).map((category) => (
              <div className="flex justify-center items-center" key={category}>
                <motion.button
                  className={`px-3 py-1 rounded-full ${activeMenuCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMenuCategory(category)}
                >
                  {category}
                </motion.button>
              </div>
            ))}
          </Carousel>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white p-3 rounded-full shadow-lg hover:bg-neutral-700 transition"
            style={{ zIndex: 10 }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white p-3 rounded-full shadow-lg hover:bg-neutral-700 transition"
            style={{ zIndex: 10 }}
          >
            <ChevronRight size={24} /> 
          </button>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {menuItems[activeMenuCategory]?.map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-black p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <span className="text-yellow-500 font-bold">{item.price}</span>
                </div>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
