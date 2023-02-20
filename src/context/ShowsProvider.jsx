import { createContext, useReducer, useEffect } from 'react';
// import useFetch from '../customHooks/useFetch';

export const ShowsContext = createContext();

const reducer = (state, action) => {
  // you cannot have asynchronous logic inside of the Reducer function..

  switch (action.type) {
    case "setAllShows":
      const {showsData} = action.payload;
      return {...state, showsData: showsData};
    case "setShowId":
      const {showId} = action.payload;
      return {...state, selectedShowId: showId, isShowSelected: true};
    case "setAllSeasons":
      const {seasonsData} = action.payload;
      return {...state, seasonsData: seasonsData};
    case "setSeasonId":
      const {seasonId} = action.payload;
      return {...state, selectedSeasonId: seasonId, isSeasonSelected: true};
    default:
      throw new Error("action type is not defined");
  }
}

const initialState = {
    isShowSelected: false, 
    selectedShowId: "", 
    showsData: [], 
    isSeasonSelected: false,
    selectedSeasonId: "",
    seasonsData: [], 
    isEpisodeSelected: false,
    selectedEpisodeId: "",
    episodesData: [],
}

export const ShowsProvider = ( {children} ) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // trying to use this instead of the useFetch custom hook..
  const fetchAndUpdate = async (url, callback) => {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  }
 
  useEffect(() => {
    // if (!state.showsData.length) {
      const showsURL = `https://api.tvmaze.com/shows`;
      fetchAndUpdate(showsURL, (data) => dispatch({type: 'setAllShows', payload: { showsData: data }}));
    // }
  }, []);

  useEffect(() => {
    if(!state.selectedShowId) return;
    const seasonsURL = `https://api.tvmaze.com/shows/${selectedShowId}/seasons`;
    fetchAndUpdate(seasonsURL, (data) => dispatch({type: 'setAllSeasons', payload: { seasonsData: data }}));
  }, [state.selectedShowId]);

  useEffect(() => {
    if(!state.selectedSeasonId) return;
    const episodesURL = `https://api.tvmaze.com/seasons/${selectedSeasonId}/episodes`;
    fetchAndUpdate(episodesURL, (data) => dispatch({type: 'setSpecificSeasonEpisodes', payload: { episodesData: data }}));
  }, [state.selectedSeasonId]);

  // select a show id
  const updateSelectedShowId = (showId) => {
    dispatch({type: "setShowId", payload: {selectedShowId: showId}});
  }

  // select a season id
  const updateSelectedSeasonId = (seasonId) => {
    dispatch({type: "setSeasonId", payload: {selectedSeasonId: seasonId}});
  }

  // select an episode id
  const updateSelectedEpisodeId = (episodeId) => {
    dispatch({type: "setEpisodeId", payload: {selectedEpisodeId: episodeId}});
  }

  return (
    <ShowsContext.Provider value={state}>
      {children}
    </ShowsContext.Provider>
  );
};