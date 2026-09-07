import React from 'react';
import './assets/styles/glass.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { BlobProvider } from './context/BlobContext';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import PracticePage from './features/practice/pages/PracticePage';
import AnalyticsPage from './features/analytics/pages/AnalyticsPage';

export default function App() {
    return (
        <BlobProvider>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/practice" element={<PracticePage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        {/* Các Route khác sẽ thêm sau */}
                        <Route path="*" element={<DashboardPage />} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </BlobProvider>
    );
}