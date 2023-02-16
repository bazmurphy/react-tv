import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ShowsProvider } from './context/ShowsProvider';
import './App.css';

const App = () => {
  console.log(`App ran`);

  return (
    <div className="app-container">
      <ShowsProvider> 
        <Header />
        <Main />
        <Footer />
      </ShowsProvider>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
