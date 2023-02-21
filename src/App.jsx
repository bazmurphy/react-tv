import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BazProvider } from './context/BazProvider';
import './App.css';

const App = () => {
  console.log(`App ran`);

  return (
    <div className="app-container">
        <Header />
        <BazProvider> 
          <Main />
        </BazProvider>
        <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
