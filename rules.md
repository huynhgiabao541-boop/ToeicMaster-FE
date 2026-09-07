# PROJECT RULES & CLEAN CODE GUIDELINES

## 1. TECH STACK & FRAMEWORKS
- **Frontend Framework:** React (Vite, Functional Components, Custom Hooks)
- **Styling:** Tailwind CSS (v3+) + CSS Modules/Globals
- **Animations:** Framer Motion (Liquid & Glass dynamics)
- **Icons:** Lucide React
- **Architecture:** Feature-Based Directory Structure (`src/features/`, `src/components/ui/`)

---

## 2. LIQUID GLASS UI DESIGN SYSTEM
- **Glassmorphism Core:** Luôn ưu tiên dùng class custom từ `tailwind.config.js`:
  - Card/Panel: `bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-card`
  - Interactive/Hover: `hover:bg-glass-hover hover:border-glass-highlight hover:shadow-glass-glow`
- **Performance First:** 
  - Không lồng quá 2 lớp `backdrop-blur` đè lên nhau để tránh tụt FPS trên GPU.
  - Sử dụng `pointer-events-none` cho các khối Blob màu nền chuyển động (`animate-liquid-morph`).

---

## 3. CODE CLEANLINESS & BEST PRACTICES

### A. React Components
- **Functional Components:** Chỉ dùng Arrow Functions hoặc `function` declaration nhất quán.
- **Single Responsibility:** 1 Component chỉ làm 1 việc. Nếu UI dài quá 150 dòng, tách thành Sub-components.
- **Atomic UI Layer:** Mọi UI căn bản (Button, Card, Input, Modal) nằm trong `src/components/ui/` và chấp nhận prop `className` mở rộng:
  ```jsx
  // Ví dụ chuẩn cho Glass Card:
  import { clsx } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function GlassCard({ children, className, ...props }) {
    return (
      <div 
        className={twMerge('bg-glass-surface backdrop-blur-glass border border-glass-border shadow-glass-card rounded-2xl p-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
  B. Tailwind & Class Merging
Luôn kết hợp clsx và tailwind-merge (hàm cn()) khi cần conditional class hoặc nhận custom className từ props bên ngoài.

Tránh dùng chuỗi class quá dài không xuống dòng; nhóm class theo logic: [Layout] [Sizing] [Background/Glass] [Border/Shadow] [Typography] [Transition].

C. State & Logic Management
Local vs Global: Ưu tiên State tại component (useState). Chỉ đưa vào Redux/Zustand các dữ liệu dùng chung toàn ứng dụng (User Session, Current Test State, Score).

Custom Hooks: Tách toàn bộ logic phức tạp (Audio playback, Timer đếm ngược, API fetching) ra file hook riêng trong src/hooks/ hoặc src/features/[feature]/hooks/.

4. NAMING CONVENTIONS
Components & Files: PascalCase (ví dụ: GlassCard.jsx, QuestionSheet.jsx).

Hooks: Bắt đầu bằng use + PascalCase (ví dụ: useTOEICTimer.js).

Utils & Helpers: camelCase (ví dụ: formatTime.js, calculateTOEICScore.js).

Constants: UPPER_SNAKE_CASE (ví dụ: MAX_TEST_TIME = 7200).

5. REFACTORING & AI ASSISTANT INSTRUCTIONS
Khai báo rõ ràng Types/PropTypes hoặc JSDoc nếu cần.

Tuyệt đối không xóa bỏ các class Tailwind Glassmorphism khi refactor UI.

Luôn kiểm tra tính tương thích Responsive (sm:, md:, lg:) cho mọi giao diện được viết mới.