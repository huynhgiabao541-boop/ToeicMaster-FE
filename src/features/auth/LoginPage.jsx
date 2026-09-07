import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles, ArrowRight, Github, Chrome } from 'lucide-react';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', formData);
    };

    return (
        <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center p-4">

            {/* 1. BACKGROUND LIQUID BLOBS (Khối chất lỏng chuyển động nền) */}
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-cyan/25 rounded-full blur-3xl animate-liquid-morph animate-liquid-float pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-purple/25 rounded-full blur-3xl animate-liquid-morph animate-liquid-float pointer-events-none [animation-delay:3s]" />

            {/* 2. GLASS CARD CONTAINER */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-card hover:border-glass-highlight transition-all duration-500"
            >
                {/* Header */}
                <div className="text-center space-y-2 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-glass-border text-xs text-brand-cyan">
                        <Sparkles className="w-3.5 h-3.5 animate-spin [animation-duration:4s]" />
                        <span>TOEIC Master Space</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        Chào mừng trở lại!
                    </h2>
                    <p className="text-sm text-slate-400">
                        Đăng nhập để tiếp tục lộ trình chinh phục TOEIC
                    </p>
                </div>

                {/* Form Login */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Input Email */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300 ml-1">Email</label>
                        <div className="relative flex items-center">
                            <Mail className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                            <input
                                type="email"
                                required
                                placeholder="student@toeic.edu.vn"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all backdrop-blur-xs"
                            />
                        </div>
                    </div>

                    {/* Input Password */}
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between ml-1">
                            <label className="text-xs font-medium text-slate-300">Mật khẩu</label>
                            <a href="#" className="text-xs text-brand-cyan hover:underline">Quên mật khẩu?</a>
                        </div>
                        <div className="relative flex items-center">
                            <Lock className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all backdrop-blur-xs"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-slate-950 font-bold shadow-glass-glow flex items-center justify-center gap-2 group transition-all"
                    >
                        <span>Vào Học Ngay</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </form>

                {/* Divider */}
                <div className="relative my-6 flex items-center justify-center">
                    <div className="w-full border-t border-white/10" />
                    <span className="absolute px-3 bg-slate-950/80 backdrop-blur-md text-xs text-slate-500 uppercase tracking-wider">
                        hoặc
                    </span>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-medium">
                        <Chrome className="w-4 h-4 text-slate-300" />
                        <span>Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-medium">
                        <Github className="w-4 h-4 text-slate-300" />
                        <span>GitHub</span>
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-8 text-center text-xs text-slate-400">
                    Chưa có tài khoản?{' '}
                    <a href="#" className="text-brand-cyan font-semibold hover:underline ml-1">
                        Đăng ký ngay
                    </a>
                </p>
            </motion.div>
        </div>
    );
}