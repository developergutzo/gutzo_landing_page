import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FloatingFoodBowl() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main food bowl with floating animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, -1, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744116432662-dbe90acb4a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmhlYWx0aHklMjBmYXN0JTIwZm9vZCUyMGJ1cmdlciUyMGZyaWVzfGVufDF8fHx8MTc1NzkzMTYwMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresh healthy food bowl with grilled chicken, salmon, avocado, tomatoes, and fresh ingredients"
            className="w-full h-full object-cover rounded-full shadow-2xl brightness-110 saturate-110"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15)) brightness(1.1) saturate(1.2)',
            }}
          />
          
          {/* Floating pomegranate seed */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8"
            animate={{
              y: [-2, 4, -2],
              x: [-1, 2, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            title="Pomegranate seed"
          >
            <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg"></div>
          </motion.div>
          
          {/* Floating avocado slice */}
          <motion.div
            className="absolute -bottom-2 -left-6 w-10 h-6"
            animate={{
              y: [-3, 3, -3],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            title="Avocado slice"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg"></div>
          </motion.div>
          
          {/* Floating coriander leaf */}
          <motion.div
            className="absolute top-1/4 -left-3 w-6 h-6"
            animate={{
              y: [-1, 3, -1],
              x: [-0.5, 1, -0.5],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            title="Coriander leaf"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-500 rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-100/20 to-orange-100/20 blur-3xl -z-10"></div>
    </div>
  );
}