import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function LiquidPill({ label, text, onClick, selected }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    // Add ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    // Cleanup ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={cn(
        "relative w-full flex items-center p-4 rounded-2xl text-left overflow-hidden",
        "border transition-all duration-300",
        selected 
          ? "bg-brand-cyan/20 border-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)] text-white" 
          : "bg-glass-surface backdrop-blur-md border-glass-border shadow-glass-sm text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full mr-4 border font-bold transition-colors",
        selected ? "bg-brand-cyan border-brand-cyan text-slate-950" : "bg-white/5 border-white/20 text-white"
      )}>
        {label}
      </div>
      <span className="flex-1 text-lg">{text}</span>

      {/* Ripple Animation */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 0.5 }}
            animate={{ scale: 30, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-brand-cyan/40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
}
