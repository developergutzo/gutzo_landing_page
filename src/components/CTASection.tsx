import { motion } from 'motion/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <motion.section 
      style={{ backgroundColor: '#ffffff' }}
      className="relative pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Main headline - Locked Colors */}
        <motion.h1 
          style={{
            color: '#000000',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 'bold',
            lineHeight: '1.3',
            marginBottom: '24px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every choice shapes your life.
        </motion.h1>
        
        {/* Subheadline - Locked Colors */}
        <motion.p 
          style={{
            color: '#2D3748',
            fontSize: 'clamp(16px, 3vw, 20px)',
            lineHeight: '1.3',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Gutzo makes the healthy choice, the easy choice.
        </motion.p>
        
        {/* Email form - Locked Colors */}
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Input
            type="email"
            placeholder="Enter your email to Eat Better"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#e2e8f0' }}
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#187D3B] focus:border-transparent shadow-sm"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button
              type="submit"
              style={{
                backgroundColor: '#187D3B',
                color: '#FFFFFF',
                fontWeight: 'bold'
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:opacity-90 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Reserve My Healthy Spot
            </Button>
          </motion.div>
        </motion.form>
        
        {/* Microcopy - Locked Color */}
        <motion.p 
          style={{ color: '#2D3748', fontSize: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          200+ early members already joined.
        </motion.p>
      </div>
    </motion.section>
  );
}