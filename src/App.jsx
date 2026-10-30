
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutAll from './pages/AboutAll';
import AllPrograms from './pages/AllPrograms';
import Partners from './pages/Partners';
import Donate from './pages/Donate';

function App() {
  return (
    <div className="flex flex-col bg-[#F3E9D4] min-h-screen pt-24 text-[#16221A]">

      <Navbar />

      <main className="grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutall" element={<AboutAll />} />
          <Route path="/allprograms" element={<AllPrograms />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
