import { createContext, useReducer, useEffect } from 'react';
// import useFetch from '../customHooks/useFetch';

export const BazContext = createContext();

// you cannot have asynchronous logic inside of a Reducer function...
const reducer = (state, action) => {
  switch (action.type) {
    case "setAllShows":
      const { showsData } = action.payload;
      return {...state, showsData: showsData};
    case "setShowId":
      const { showId } = action.payload;
      return {...state, selectedShowId: showId, isShowSelected: showId};
    case "clearShowId":
      return {...state, selectedShowId: null, isShowSelected: false, selectedSeasonId: null, isSeasonSelected: false, seasonsData: [], selectedEpisodeId: null, isEpisodeSelected: false, episodesData: []};
    case "setAllSeasons":
      const { seasonsData } = action.payload;
      return {...state, seasonsData: seasonsData};
    case "setSeasonId":
      const { seasonId } = action.payload;
      return {...state, selectedSeasonId: seasonId, isSeasonSelected: seasonId};
    case "clearSeasonId":
      return {...state, selectedSeasonId: null, isSeasonSelected: false, selectedEpisodeId: null, isEpisodeSelected: false, episodesData: []};
    case "setEpisodes":
      const {episodesData } = action.payload;
      return {...state, episodesData: episodesData};
    case "setEpisodeId":
      const { episodeId } = action.payload;
      return {...state, selectedEpisodeId: episodeId, isEpisodeSelected: episodeId};
    case "clearEpisodeId":
      return {...state, selectedEpisodeId: null, isEpisodeSelected: false};
    default:
      throw new Error(`reducer Error: action type: ${action.type} is not defined`);
  }
}

const initialState = {
    isShowSelected: false, 
    selectedShowId: null, 
    showsData: [], 
    isSeasonSelected: false,
    selectedSeasonId: null,
    seasonsData: [], 
    isEpisodeSelected: false,
    selectedEpisodeId: null,
    episodesData: [],
}

export const BazProvider = ( {children} ) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // trying to use this instead of the useFetch custom hook..
  const fetchAndUpdate = async (url, callback) => {
    console.log("fetchAndUpdate ran");
    try {
      const response = await fetch(url);
      const data = await response.json();
      callback(data);
    } catch (error) {
      console.log("fetchAndUpdate error:", error)
      throw error;
    }
  }
 
  useEffect(() => {
    console.log(`useEffect 1 ran - /shows`);
    console.log("useEffect 1 state:", state);
    if (!!state.showsData) {
      const showsURL = `https://api.tvmaze.com/shows`;
      fetchAndUpdate(showsURL, (data) => dispatch({type: 'setAllShows', payload: { showsData: data }}));
    }
  }, []);

  useEffect(() => {
    console.log(`useEffect 2 ran - /shows/id/seasons`);
    console.log("useEffect 2 state:", state);
    if(!state.selectedShowId) return;
    const seasonsURL = `https://api.tvmaze.com/shows/${state.selectedShowId}/seasons`;
    fetchAndUpdate(seasonsURL, (data) => dispatch({type: 'setAllSeasons', payload: { seasonsData: data }}));
  }, [state.selectedShowId]);

  useEffect(() => {
    console.log(`useEffect 3 ran - /seasons/id/episodes`);
    console.log("useEffect 3 state:", state);
    if(!state.selectedSeasonId) return;
    const episodesURL = `https://api.tvmaze.com/seasons/${state.selectedSeasonId}/episodes`;
    fetchAndUpdate(episodesURL, (data) => dispatch({type: 'setEpisodes', payload: { episodesData: data }}));
  }, [state.selectedSeasonId]);

  return (
    <BazContext.Provider value={{state: state, dispatch: dispatch}}>
      {children}
    </BazContext.Provider>
  );
};


// // select a show id
// const updateSelectedShowId = (showId) => {
//   dispatch({type: "setShowId", payload: {selectedShowId: showId}});
// }

// // select a season id
// const updateSelectedSeasonId = (seasonId) => {
//   dispatch({type: "setSeasonId", payload: {selectedSeasonId: seasonId}});
// }

// // select an episode id
// const updateSelectedEpisodeId = (episodeId) => {
//   dispatch({type: "setEpisodeId", payload: {selectedEpisodeId: episodeId}});
// }