import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

function App() {
  return ( 
    <>
      <Navbar />
      <div className='cotainer'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
