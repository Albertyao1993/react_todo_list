import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Todo App - Built with React, TypeScript, Vite</p>
      </footer>
    </div>
  );
}

export default App;
