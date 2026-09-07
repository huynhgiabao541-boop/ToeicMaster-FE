import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp, BookOpen, Headphones, PenTool } from 'lucide-react';
import { cn } from '../../../utils/cn';

// Icon mapping
const icons = {
  grammar: PenTool,
  vocabulary: BookOpen,
  reading: TrendingUp,
  listening: Headphones,
};

export default function PrismCard({ title, score, status, iconName, description }) {
  const Icon = icons[iconName] || BookOpen;

  if (status === 'good') {
    return (
      <div className="prism-good-border p-[2px] rounded-2xl w-full h-full shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <div className="prism-good-content bg-slate-900/90 backdrop-blur-xl rounded-[14px] p-6 h-full flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/50 text-brand-cyan">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">{title}</h3>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-white">{score}</span>
              <span className="text-xs text-brand-cyan font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Tốt
              </span>
            </div>
          </div>
          
          <p className="text-sm text-slate-400 z-10">{description}</p>
          
          {/* Subtle inner glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/20 blur-3xl rounded-full z-0 pointer-events-none" />
        </div>
      </div>
    );
  }

  if (status === 'weak') {
    return (
      <div className="relative rounded-2xl w-full h-full border border-red-500/30 p-6 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_40px_rgba(239,68,68,0.15)] animate-pulse">
        <div className="flex justify-between items-start z-10 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/50 text-red-400">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">{title}</h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-2xl font-black text-red-400">{score}</span>
            <span className="text-xs text-red-500 font-medium flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Cần Cải Thiện
            </span>
          </div>
        </div>
        
        <p className="text-sm text-slate-400 z-10 relative mt-4">{description}</p>
        
        {/* Subtle inner glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/20 blur-3xl rounded-full z-0 pointer-events-none" />
      </div>
    );
  }

  // Default / Neutral state
  return (
    <div className="rounded-2xl w-full h-full border border-glass-border p-6 bg-glass-surface backdrop-blur-glass hover:bg-glass-hover transition-colors">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 text-slate-300">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white">{title}</h3>
        </div>
        <span className="text-xl font-bold text-slate-300">{score}</span>
      </div>
      <p className="text-sm text-slate-400 mt-4">{description}</p>
    </div>
  );
}
