import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/qr-code/generate" className={s.navButton}>
                <span className={s.buttonIcon}>✏️</span>
                Генерировать QR-код
            </Link>
            <Link to="/qr-code/scan" className={s.navButton}>
                <span className={s.buttonIcon}>📷</span>
                Сканировать QR-код
            </Link>
            <Link to="/qr-code/generateHistory" className={s.navButton}>
                <span className={s.buttonIcon}>🕒</span>
                История генерации
            </Link>
            <Link to="/qr-code/scanHistory" className={s.navButton}>
                <span className={s.buttonIcon}>📋</span>
                История сканирования
            </Link>
            <Link to="/qr-code/videos" className={s.navButton}>
                <span className={s.buttonIcon}>🎥</span>
                Видео
            </Link>
        </nav>
    );
};