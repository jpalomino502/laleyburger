import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/testimonials' 
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-neutral-900 p-8 rounded-lg text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl mb-4">"{testimonials[currentTestimonial].comment}"</p>
              <p className="text-yellow-500 font-semibold">{testimonials[currentTestimonial].name}</p>
            </motion.div>
          </AnimatePresence>

          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
