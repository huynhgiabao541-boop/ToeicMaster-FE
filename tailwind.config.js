/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // 1. Hệ màu sắc trong suốt và tương phản cao (phù hợp cả Dark/Light Mode)
            colors: {
                glass: {
                    surface: 'rgba(255, 255, 255, 0.08)',    // Nền kính mờ mặc định
                    hover: 'rgba(255, 255, 255, 0.15)',      // Nền kính khi di chuột
                    border: 'rgba(255, 255, 255, 0.2)',      // Viền kính phát sáng nhẹ
                    highlight: 'rgba(255, 255, 255, 0.45)',   // Điểm viền phản chiếu ánh sáng
                    dark: 'rgba(15, 23, 42, 0.65)',          // Nền kính tối (Dark Glass)
                },
                brand: {
                    cyan: '#00f2fe',
                    blue: '#4facfe',
                    purple: '#7f00ff',
                }
            },

            // 2. Tùy chỉnh độ mờ hậu cảnh (Backdrop Blur)
            backdropBlur: {
                'xs': '2px',
                'glass': '16px', // Độ mờ tối ưu cho hiệu ứng Liquid Glass
                'heavy': '24px',
            },

            // 3. Đổ bóng tạo hiệu ứng nổi và nổi khối 3D (Refractive Shadow)
            boxShadow: {
                'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
                'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.18)',
                'glass-glow': '0 0 25px rgba(79, 172, 254, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)',
            },

            // 4. Hiệu ứng chuyển động chất lỏng (Liquid Animations)
            animation: {
                'liquid-float': 'float 6s ease-in-out infinite',
                'liquid-pulse': 'pulseGlow 4s ease-in-out infinite alternate',
                'liquid-morph': 'morph 8s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%': { opacity: '0.4', filter: 'blur(20px)' },
                    '100%': { opacity: '0.8', filter: 'blur(30px)' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
                },
            },
        },
    },
    plugins: [],
}