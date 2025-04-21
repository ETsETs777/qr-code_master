import './Apostrophes.css'; 

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
      </main>
      <Footer />
    </div>
  );
}

export default App;

// Header.jsx
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="./logo.png" alt="Л" />
          <span>QR master</span>
        </div>
        <nav className="nav">
        <a href="https://docs.google.com/document/d/1IcTkN35mDzFfoMB3u_tl6xIP2A-vv5_OyERRFotO_Wg/edit?usp=sharing">Пользовательское соглашение</a>
          <a href="https://github.com/ETsETs777/qr-code-main"> GitHub</a>
        </nav>
      </div>
    </header>
  );
}
// Footer.jsx
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src="./logo.png" alt="Логотип" />
          <span>QR master</span>
        </div>
        <div className="co">©{new Date().getFullYear()} Все права защищены</div>
      </div>
    </footer>
  );
}