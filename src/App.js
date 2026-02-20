import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Company from './Pages/Company';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}
export default App;
 