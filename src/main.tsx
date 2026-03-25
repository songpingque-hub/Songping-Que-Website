import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import CaseStudyNeo from './CaseStudyNeo.tsx';
import CaseStudyNeoX from './CaseStudyNeoX.tsx';
import CaseStudyMuShanghai from './CaseStudyMuShanghai.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/neo" element={<CaseStudyNeo />} />
        <Route path="/case-study/neox" element={<CaseStudyNeoX />} />
        <Route path="/case-study/mushanghai" element={<CaseStudyMuShanghai />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
