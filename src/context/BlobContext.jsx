import React, { createContext, useContext, useState } from 'react';

// Theme colors mapping
export const BLOB_THEMES = {
  dashboard: {
    color1: 'bg-brand-cyan/30',
    color2: 'bg-brand-purple/30',
    color3: 'bg-brand-blue/20',
  },
  success: {
    color1: 'bg-green-500/30',
    color2: 'bg-emerald-400/30',
    color3: 'bg-teal-500/20',
  },
  error: {
    color1: 'bg-red-500/30',
    color2: 'bg-orange-400/30',
    color3: 'bg-rose-500/20',
  },
  practice: {
    color1: 'bg-blue-500/30',
    color2: 'bg-indigo-500/30',
    color3: 'bg-violet-400/20',
  }
};

const BlobContext = createContext();

export function BlobProvider({ children }) {
  const [blobTheme, setBlobTheme] = useState('dashboard');

  return (
    <BlobContext.Provider value={{ blobTheme, setBlobTheme, themes: BLOB_THEMES }}>
      {children}
    </BlobContext.Provider>
  );
}

export function useBlob() {
  const context = useContext(BlobContext);
  if (!context) {
    throw new Error('useBlob must be used within a BlobProvider');
  }
  return context;
}
