import { useContext } from 'react';
import { BazContext } from '../context/BazProvider';
import ShowSelect from './ShowSelect';
import ShowsList from './ShowsList';
import SeasonSelect from './SeasonSelect';
import SeasonsList from './SeasonsList';
import EpisodeSelect from './EpisodeSelect';
import EpisodesList from './EpisodesList';

const Main = () => {
  console.log(`Main ran`);
  
  const { state, dispatch } = useContext(BazContext);

  return (
    <main className="main-container">
      <p className="component-name">Main.jsx</p>
      <div className="controls">
        <ShowSelect />
        <SeasonSelect />
        <EpisodeSelect />
      </div>
      <div>
        {/* I NEED TO FIGURE OUT THE CONDITIONAL RENDERING IN A WAY THAT MAKES SENSE */}
        {/* <ShowsList /> */}
        {(state.showsData && !state.isShowSelected) && <ShowsList />}
        {/* <SeasonsList /> */}
        {(state.seasonsData && !state.isSeasonSelected) && <SeasonsList />}
        {/* {<EpisodesList />} */}
        {state.episodesData && <EpisodesList />}
      </div>
    </main>
  );
};

export default Main;