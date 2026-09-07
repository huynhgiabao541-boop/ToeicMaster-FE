import React from 'react';
import { useBlob } from '../../context/BlobContext';
import GlassDock from './GlassDock';
import { cn } from '../../utils/cn';

export default function MainLayout({ children }) {
  const { blobTheme, themes } = useBlob();
  const activeTheme = themes[blobTheme] || themes.dashboard;

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col">
      
      {/* LAYER 1: DEEP CANVAS (Background Blobs) z-0 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className={cn(
            "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-liquid-morph animate-liquid-float opacity-50 transition-colors duration-1000",
            activeTheme.color1
          )} 
        />
        <div 
          className={cn(
            "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] animate-liquid-morph animate-liquid-float opacity-50 transition-colors duration-1000 [animation-delay:2s]",
            activeTheme.color2
          )} 
        />
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-[120px] animate-liquid-morph animate-liquid-float opacity-30 transition-colors duration-1000 [animation-delay:4s]",
            activeTheme.color3
          )} 
        />
      </div>

      {/* LAYER 2: GLASS WORKSPACE (Main Content) z-10 to z-30 */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto p-6 md:p-10 pb-32">
        {children}
      </main>

      {/* LAYER 3: FLOATING NAVIGATION (Dock) z-40 */}
      <GlassDock />

    </div>
  );
}
