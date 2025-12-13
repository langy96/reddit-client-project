import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Global header */}
        <header className="header">
          <Link to="/">Reddit Client</Link>
        </header>

        {/* Main content fills available space */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Detail />} />
          </Routes>
        </main>

        {/* Global footer pinned to bottom */}
        <footer className="footer">
          <p>
            Built by Jamie •{' '}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            • Codecademy Project
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}