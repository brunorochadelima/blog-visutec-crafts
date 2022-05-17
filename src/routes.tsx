import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';
import Post from 'pages/Post';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="post/:id" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
