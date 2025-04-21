import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';
import './GenerateHistory.css'; 

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className="history-container">
            <h2 className="history-title">История генерации QR-кодов</h2>
            
            {data.length === 0 ? (
                <p className="history-empty">История пуста</p>
            ) : (
                <div className="history-grid">
                    {data.map((text, index) => (
                        <div key={`${text}-${index}`} className="history-card">
                            <div className="qr-code-wrapper">
                                <QRCodeSVG 
                                    value={text} 
                                    size={120}
                                    level="H"
                                    includeMargin={true}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                />
                            </div>
                            <div className="qr-content">
                                <p className="qr-text">{text}</p>
                                <button 
                                    className="copy-btn"
                                    onClick={() => navigator.clipboard.writeText(text)}
                                >
                                    Копировать текст
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};