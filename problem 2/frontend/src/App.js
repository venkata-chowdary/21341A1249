import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="font-poppins bg-dark-background text-dark-text min-h-screen flex flex-col">
        <header className="p-4 bg-dark-card shadow-lg">
          <h1 className="text-2xl font-bold text-center text-dark-accent">Top Products</h1>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <footer className="p-4 bg-dark-card text-center text-sm text-gray-500">
          © 2024 Modern Web. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
