import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, FastForward, Rewind } from 'lucide-react';
import LiquidPill from '../../../components/ui/LiquidPill';
import { useBlob } from '../../../context/BlobContext';
import { cn } from '../../../utils/cn';

function AudioWaveform({ isPlaying }) {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-brand-cyan rounded-full"
          animate={{
            height: isPlaying ? [10, 40, 15, 35, 10] : 10,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default function PracticePage() {
  const { setBlobTheme } = useBlob();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Chuyển theme sang practice khi vào trang này
  useEffect(() => {
    setBlobTheme('practice');
    return () => setBlobTheme('dashboard');
  }, [setBlobTheme]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="w-full h-[calc(100vh-10rem)] flex flex-col md:flex-row gap-6 mt-4">
      
      {/* BÊN TRÁI: Câu hỏi & Audio (The Focus Chamber) */}
      <div className="flex-1 flex flex-col h-full bg-glass-surface backdrop-blur-[20px] border border-glass-border shadow-glass-card rounded-3xl overflow-hidden">
        {/* Tiêu đề part */}
        <div className="p-4 border-b border-white/10 bg-black/20 flex justify-between items-center">
          <span className="font-bold text-white tracking-wide">Part 1: Photographs</span>
          <span className="text-sm text-slate-400">Question 1/10</span>
        </div>
        
        {/* Hình ảnh/Đoạn văn */}
        <div className="flex-1 flex items-center justify-center p-6 bg-black/10">
          <div className="w-full max-w-sm aspect-square bg-slate-800/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden shadow-inner relative">
            <span className="text-slate-500">Image Placeholder</span>
            {/* Giả lập đường viền scan ảnh khi đang phát audio */}
            {isPlaying && (
              <motion.div
                className="absolute inset-x-0 h-1 bg-brand-cyan/50 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Trình phát Audio */}
        <div className="p-6 border-t border-white/10 bg-slate-900/50">
          <AudioWaveform isPlaying={isPlaying} />
          
          <div className="flex items-center justify-center gap-6 mt-6">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Rewind className="w-5 h-5" />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center text-slate-950 shadow-glass-glow hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            
            <button className="text-slate-400 hover:text-white transition-colors">
              <FastForward className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* BÊN PHẢI: Trả lời câu hỏi (Liquid Pills) */}
      <div className="w-full md:w-[40%] flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-bold text-white mb-4 px-2">Chọn đáp án đúng nhất:</h2>
        
        {['A', 'B', 'C', 'D'].map((option, idx) => (
          <LiquidPill 
            key={option}
            label={option}
            text={`Mock option text for ${option} goes here.`}
            selected={selectedOption === option}
            onClick={() => setSelectedOption(option)}
          />
        ))}
        
        <div className="mt-8 flex justify-end">
          <button 
            disabled={!selectedOption}
            className={cn(
              "px-8 py-3 rounded-xl font-bold transition-all",
              selectedOption 
                ? "bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "bg-white/10 text-slate-500 cursor-not-allowed"
            )}
          >
            Câu Tiếp Theo
          </button>
        </div>
      </div>

    </div>
  );
}
