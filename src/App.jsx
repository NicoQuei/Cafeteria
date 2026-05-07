import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <BrowserRouter>
        <div className="fixed-noise" aria-hidden="true"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SmoothScroll>
  );
}

export default App;
