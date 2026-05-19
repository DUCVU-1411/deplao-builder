import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// FREE_MODE_TEMP: giữ import cũ để sau này mở lại nhanh route affiliate
// import AffiliatePage from './pages/AffiliatePage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#060a18] text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* FREE_MODE_TEMP: tạm ẩn trang affiliate, giữ route cũ ở comment để mở lại nhanh */}
          {/* <Route path="/affiliate" element={<AffiliatePage />} /> */}
          <Route path="/affiliate" element={<Navigate to="/" replace />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

