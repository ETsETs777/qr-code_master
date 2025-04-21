import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';
import './ScanHistory.css'; 

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className="scan-history-container">
            <h2 className="scan-history-title">История сканированных QR-кодов</h2>
            
            {data.length === 0 ? (
                <p className="scan-history-empty">Вы еще не сканировали QR-коды</p>
            ) : (
                <div className="scan-history-grid">
                    {data.map((text, index) => (
                        <div key={`${text}-${index}`} className="scan-history-card">
                            <div className="scan-qr-wrapper">
                                <QRCodeSVG 
                                    value={text} 
                                    size={120}
                                    level="H"
                                    includeMargin={true}
                                    bgColor="#ffffff"
                                    fgColor="#4f46e5"
                                />
                            </div>
                            <div className="scan-content">
                                <p className="scan-text">{text}</p>
                                <div className="scan-actions">
                                    <button 
                                        className="scan-copy-btn"
                                        onClick={() => navigator.clipboard.writeText(text)}
                                    >
                                        Копировать
                                    </button>
                                    <a
                                        href={text.startsWith('http') ? text : `https://${text}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="scan-open-btn"
                                    >
                                        Открыть
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};