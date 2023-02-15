import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import useFetch from "./customHooks/useFetch";
import Header from './components/Header';
import Functionality from './components/Functionality';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  console.log(`App ran`);

  const showsURL = `https://api.tvmaze.com/shows`;
  const { loading: showsLoading, data : showsData, error: showsError } = useFetch(showsURL);

  // const [localCache, setLocalCache] = useState(null);

  // const [showSelect, setShowSelect] = useState(null);
  // const [seasonSelect, setSeasonSelect] = useState(null);
  // const [episodeSelect, setEpisodeSelect] = useState(null);

  // const [showId, setShowId] = useState(null);
  // const [seasonId, setSeasonId] = useState(null);

  // const showsURL = `https://api.tvmaze.com/shows`;
  // const { loading: showLoading, data : showData, error: showError } = useFetch(showsURL);

  // const seasonsURL = `https://api.tvmaze.com/shows/${showId}/seasons`;
  // const { loading: seasonsLoading, data: seasonsData, error: seasonsError } = useFetch(seasonsURL);
  
  // const episodesURL = `https://api.tvmaze.com/shows/${showId}/episodes`;
  // const { loading: episodesLoading, data: episodesData, error: epsiodesError } = useFetch(episodesURL);

  // useEffect(() => {
  //   console.log(`useEffect ran`);
  //   // setLocalCache(showData);
  // }, []);

  return (
    <div className="app-container">
      <Header />
      {showsData && <Functionality showsData={showsData} />}
      {showsData && <Main showsData={showsData} />}
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
