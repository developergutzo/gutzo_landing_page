import { motion } from 'motion/react';

interface ScarcityBannerProps {
  message: string;
  accentText?: string;
  className?: string;
}

export function ScarcityBanner({ message, accentText, className = "" }: ScarcityBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-[#EA580C]/30 rounded-full ${className}`}
    >
      <span className="text-[#EA580C] text-sm font-medium">{message}</span>
      {accentText && (
        <span className="text-[#EA580C] text-sm font-medium">🌱</span>
      )}
    </motion.div>
  );
}