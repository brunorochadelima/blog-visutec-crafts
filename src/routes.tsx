import React from 'react';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';
import Post from 'pages/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PesquisaProvider } from 'context/Pesquisa';
import Header from 'components/Header';

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <PesquisaProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Pagina404 />} />
            <Route path="post/:id" element={<Post />} />
          </Routes>
        </PesquisaProvider>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
