import { useState, useEffect, createContext } from 'react';
import useFetch from '../customHooks/useFetch';

export const ShowsContext = createContext();

export const ShowsProvider = ({children}) => {
  console.log(`ShowsProvider ran`);

  const showsURL = `https://api.tvmaze.com/shows`;
  const { loading: showsLoading, data : showsData, error: showsError } = useFetch(showsURL);

  // const [showsDataCache, setShowsDataCache] = useState([]);
  // Ideally I want to store the API data in a Cache (that is not refreshed on Re-render)...

  const [isShowSelected, setIsShowSelected] = useState(false);
  
  const [selectedShowId, setSelectedShowId] = useState(0);

  return (
    <ShowsContext.Provider 
      value={{showsLoading, showsData, showsError, isShowSelected, setIsShowSelected, selectedShowId, setSelectedShowId}}>
      {children}
    </ShowsContext.Provider>
  );
};