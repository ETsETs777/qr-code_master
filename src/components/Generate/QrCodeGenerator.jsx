import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import s from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        if (!value.trim()) return;
        
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={s.container}>
            <h1 className={s.title}>Генератор QR-кодов</h1>
            <p className={s.subtitle}>Преобразуйте любой текст или URL-адрес в QR-код</p>
            
            <input
                type="text"
                value={value}
                placeholder="Ввод "
                onChange={onChangeHandler}
                className={s.input}
            />
            
            <button 
                type="button" 
                className={s.button} 
                onClick={onClickHandler}
                disabled={!value.trim()}
            >
                Сгенерировать QR-код
            </button>

            {result && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG 
                        value={result} 
                        size={200}
                        level="H"
                        fgColor="#1a1a1a"
                        bgColor="#ffffff"
                        includeMargin={true}
                    />
                </div> 
            )}
        </div>
    );
};