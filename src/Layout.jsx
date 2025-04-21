import { Routes, Route } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';
import { Header } from './components/on/Apostrophes';
import { Footer } from './components/on/Apostrophes';
const Layout = () => {
    return (
        <div className="app">
            <Header />
            <div style={{ 
                background: "url('back.webp') center/cover no-repeat fixed",
                minHeight: 'calc(100vh - 120px)', 
                padding: '20px 0'
            }}>
                <Navigation />
                <Routes>
                    <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
                    <Route path="/qr-code/scan" element={<QrCodeScanner />} />
                    <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
                    <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
                </Routes>
            </div>
            
            <Footer />
        </div>
    );
};

export { Layout };
