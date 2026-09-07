import React, { useEffect } from 'react';
import { useBlob } from '../../../context/BlobContext';
import PrismCard from '../components/PrismCard';
import { motion } from 'framer-motion';

const mockData = [
  {
    id: 1,
    title: 'Kỹ Năng Nghe (Listening)',
    score: '420/495',
    status: 'good',
    iconName: 'listening',
    description: 'Bạn phản xạ âm thanh tốt ở Part 1 & 2. Tốc độ bắt từ khóa đạt mức xuất sắc.',
  },
  {
    id: 2,
    title: 'Kỹ Năng Đọc (Reading)',
    score: '280/495',
    status: 'neutral',
    iconName: 'reading',
    description: 'Tốc độ đọc ở Part 7 còn chậm. Cần luyện tập thêm phương pháp Skimming & Scanning.',
  },
  {
    id: 3,
    title: 'Ngữ Pháp (Grammar)',
    score: 'Trung bình',
    status: 'weak',
    iconName: 'grammar',
    description: 'Thường xuyên sai ở các cấu trúc Mệnh đề quan hệ và Câu điều kiện loại 2, 3.',
  },
  {
    id: 4,
    title: 'Từ Vựng (Vocabulary)',
    score: 'Tốt',
    status: 'good',
    iconName: 'vocabulary',
    description: 'Vốn từ vựng thương mại phong phú. Áp dụng tốt ngữ cảnh trong Part 5 & 6.',
  }
];

export default function AnalyticsPage() {
  const { setBlobTheme } = useBlob();

  useEffect(() => {
    // Đổi theme nền thành dashboard (hoặc bạn có thể tạo một theme 'analytics' riêng trong BlobContext)
    setBlobTheme('dashboard'); 
  }, [setBlobTheme]);

  return (
    <div className="flex flex-col space-y-10 mt-6 pb-24">
      {/* HEADER SECTION */}
      <header className="relative z-20 space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-4">
          Báo Cáo & Phân Tích
          <span className="text-xs font-normal px-2 py-1 bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 rounded-md">
            Glass Observatory
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Lăng kính phân tích chi tiết hiệu suất làm bài. Nhận diện điểm mạnh để phát huy và điểm yếu để khắc phục kịp thời.
        </p>
      </header>

      {/* PRISM REPORT GRID */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {mockData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <PrismCard 
              title={item.title}
              score={item.score}
              status={item.status}
              iconName={item.iconName}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}
