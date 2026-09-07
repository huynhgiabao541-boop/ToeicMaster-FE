toeic-liquid-ui/
├── public/                     # Static assets (Favicon, Fonts, Audios mẫu)
├── src/
│   ├── assets/                 # Images, Icons, Global SVGs, Glass Backgrounds
│   │   ├── images/
│   │   └── styles/             # Global CSS, Custom Glassmorphism Utilities
│   │       └── glass.css       # Các class Tailwind/CSS tùy chỉnh cho hiệu ứng kính
│   │
│   ├── components/             # Reusable UI Components (Shared/Common)
│   │   ├── ui/                 # Atomic UI với phong cách Liquid Glass
│   │   │   ├── GlassCard.jsx   # Card khung kính mờ
│   │   │   ├── GlassButton.jsx # Nút bấm có hiệu ứng lỏng (Liquid hover)
│   │   │   ├── GlassInput.jsx  # Input field xuyên thấu
│   │   │   ├── GlassModal.jsx  # Pop-up kính
│   │   │   └── AudioPlayer.jsx # Trình phát audio Part 1-4 custom UI
│   │   └── layout/             # Layout chung
│   │       ├── Navbar.jsx      # Thanh điều hướng dạng Floating Glass
│   │       ├── Sidebar.jsx     # Menu bên
│   │       └── Footer.jsx
│   │
│   ├── features/               # Chia module theo từng tính năng chính (Feature-based)
│   │   ├── auth/               # Đăng nhập / Đăng ký
│   │   │   ├── components/
│   │   │   ├── api/            # Call API riêng cho Auth
│   │   │   └── hooks/
│   │   ├── practice/           # Luyện tập theo Part (Part 1 -> Part 7)
│   │   │   ├── components/     # QuestionCard, AudioControl, TimerBar
│   │   │   ├── pages/          # PracticePage.jsx
│   │   │   └── hooks/          # useAudio.js, useTimer.js
│   │   ├── mock-test/          # Thi thử full 200 câu
│   │   │   ├── components/     # QuestionSheet, PartNavigator
│   │   │   └── pages/          # TestExamPage.jsx
│   │   └── analytics/          # Báo cáo kết quả, Biểu đồ kỹ năng
│   │       └── components/     # ScoreRadarChart.jsx, StreakBoard.jsx
│   │
│   ├── hooks/                  # Global Custom Hooks
│   │   ├── useGlassEffect.js   # Hook xử lý hiệu ứng di chuột theo vệt sáng kính
│   │   └── useDebounce.js
│   │
│   ├── services/               # Cấu hình API Client (Axios / Fetch instance)
│   │   └── api.js              # Interceptors, BaseURL setup
│   │
│   ├── store/                  # Quản lý State toàn cục (Redux Toolkit hoặc Zustand)
│   │   ├── slices/             # userSlice, examSlice, audioSlice
│   │   └── index.js
│   │
│   ├── utils/                  # Functions tiện ích (Format thời gian, tính điểm TOEIC)
│   │   ├── formatTime.js
│   │   └── toeicScoring.js
│   │
│   ├── routes/                 # Cấu hình chuyển trang (React Router)
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx                 # Root Component
│   └── main.jsx                # Entry Point
│
├── .env                        # Biến môi trường (VITE_API_URL)
├── tailwind.config.js          # Config màu sắc, blur, shadow cho hiệu ứng Liquid Glass
└── package.json