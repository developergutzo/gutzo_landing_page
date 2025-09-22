import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';

interface EmailSignupProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export function EmailSignup({ 
  buttonText = "Join Early Access", 
  placeholder = "Enter your email",
  className = ""
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission logic here
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 max-w-md w-full ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#17833C] focus:border-transparent"
      />
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Button
          type="submit"
          className="px-6 py-3 text-base font-medium text-white bg-[#17833C] hover:bg-[#15752F] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          style={{
            boxShadow: isHovered ? '0 8px 25px rgba(23, 131, 60, 0.3)' : '0 4px 15px rgba(23, 131, 60, 0.2)'
          }}
        >
          {buttonText}
        </Button>
      </motion.div>
    </form>
  );
}