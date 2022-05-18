import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';
import Post from 'pages/Post';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  const [busca, setBusca] = React.useState('');
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
