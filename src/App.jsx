import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Aksiya from './pages/Aksiya'
import Kontakt from './pages/Kontakt'
import Fililal from './pages/Fililal'
import Dastavka from './pages/Dastavka'
import ErrorPage from './errors/ErrorPage'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aksiya" element={<Aksiya />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/filial" element={<Fililal />} />
        <Route path="/dastavka" element={<Dastavka />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
