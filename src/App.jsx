import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'


/* Import Page Level Component Architectures */
import Home from './pages/Home'
import AboutAll from './pages/AboutAll'
import AllPrograms from './pages/AllPrograms' 

function App() {
  return (
    // forces the app layout height, and provides top padding (pt-24) to clear the navbar space.
    <div className="flex flex-col bg-[#F3E9D4] min-h-screen pt-24 text-[#16221A]">
      
      <Navbar />
      
      {/* Main viewport body stretches to fill empty space, pushing the footer down */}
      <main className="grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutall" element={<AboutAll />} /> 
          <Route path="/allprograms" element={<AllPrograms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer rests at the baseline*/}
      <Footer />
      
    </div>
  )
}

export default App;