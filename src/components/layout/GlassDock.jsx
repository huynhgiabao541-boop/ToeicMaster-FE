import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Trophy, BarChart2, Settings } from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
  { id: 'home', icon: Home, label: 'Trang chủ' },
  { id: 'practice', icon: BookOpen, label: 'Luyện tập' },
  { id: 'test', icon: Trophy, label: 'Thi thử' },
  { id: 'analytics', icon: BarChart2, label: 'Thống kê' },
  { id: 'settings', icon: Settings, label: 'Cài đặt' },
];

export default function GlassDock() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <nav 
        className={cn(
          "flex items-center gap-2 p-2 rounded-2xl",
          "bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-card",
          "transition-all duration-300"
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "relative group flex items-center justify-center w-12 h-12 rounded-xl transition-colors",
                isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 relative z-10" />
              
              {/* Tooltip */}
              <div className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all origin-bottom bg-slate-800 text-xs px-2 py-1 rounded-md border border-white/10 shadow-lg pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
              
              {/* Active Indicator */}
              {isActive && (
                <motion.div 
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 bg-brand-cyan/20 border border-brand-cyan/30 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
