import React from 'react';
import './assets/styles/glass.css';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';
import { BlobProvider } from './context/BlobContext';
import { cn } from './utils/cn';

function DashboardContent() {
    return (
        <div className="flex flex-col items-center justify-center space-y-12 mt-10">
            {/* HEADER SECTION */}
            <header className="relative z-20 text-center space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-sm text-sm text-brand-cyan">
                    <Sparkles className="w-4 h-4 animate-spin [animation-duration:3s]" />
                    <span>TOEIC Learning App - 3D Liquid Glass UI</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                    Chinh Phục TOEIC Với Không Gian Mới
                </h1>
            </header>

            {/* GRID CARDS (Các ô kính Liquid Glass) */}
            <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {/* Card 1: Luyện tập */}
                <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={cn(
                        "p-6 rounded-2xl cursor-pointer transition-all group",
                        "bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-card",
                        "hover:bg-glass-hover hover:border-glass-highlight hover:shadow-glass-glow"
                    )}
                >
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Luyện Tập Theo Part</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        Kho câu hỏi Part 1 - 7 phong phú kèm audio chuẩn quốc tế và giải thích chi tiết.
                    </p>
                    <div className="flex items-center text-brand-cyan text-sm font-medium group-hover:translate-x-1 transition-transform">
                        <span>Bắt đầu ngay</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </motion.div>

                {/* Card 2: Bảng xếp hạng */}
                <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={cn(
                        "p-6 rounded-2xl cursor-pointer transition-all group",
                        "bg-glass-surface backdrop-blur-[20px] border border-glass-border shadow-glass-card",
                        "hover:bg-glass-hover hover:border-glass-highlight hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    )}
                >
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                        <Trophy className="w-6 h-6 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Bảng Xếp Hạng</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        Theo dõi chuỗi ngày học (Streak), tích điểm và thi đua top học viên xuất sắc.
                    </p>
                    <div className="flex items-center text-brand-purple text-sm font-medium group-hover:translate-x-1 transition-transform">
                        <span>Xem thứ hạng</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </motion.div>
            </div>

            {/* LIQUID BUTTON */}
            <div className="relative z-30 mt-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold shadow-glass-glow hover:shadow-cyan-500/50 transition-shadow"
                >
                    Vào Thi Thử Full Test (200 Câu)
                </motion.button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BlobProvider>
            <MainLayout>
                <DashboardContent />
            </MainLayout>
        </BlobProvider>
    );
}