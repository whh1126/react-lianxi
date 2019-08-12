import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MyRoute, route } from './routes';
import Footer from './views/footer';

function App() {
  return (
    <BrowserRouter>
      <MyRoute route={route}>
      </MyRoute>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
