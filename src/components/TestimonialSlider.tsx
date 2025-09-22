import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Finally, food that feels right.",
    author: "Priya K.",
    role: "Marketing Manager"
  },
  {
    quote: "Healthy that doesn't taste boring.",
    author: "Arjun M.",
    role: "Software Developer"
  },
  {
    quote: "Fresh meals that actually satisfy.",
    author: "Sneha R.",
    role: "Designer"
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-20">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : 10,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <blockquote className="text-gray-700 italic mb-2">
            "{testimonial.quote}"
          </blockquote>
          <cite className="text-sm text-gray-500 font-medium">
            — {testimonial.author}, {testimonial.role}
          </cite>
        </motion.div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#17833C]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}