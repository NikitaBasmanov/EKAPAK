import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/App.tsx';
import Basket from './pages/Basket.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/cart" element={<Basket />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
);
