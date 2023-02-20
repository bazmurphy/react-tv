import ShowSelect from './ShowSelect';
import ShowsList from './ShowsList';
import SeasonSelect from './SeasonSelect';
import SeasonsList from './SeasonsList';
import EpisodeSelect from './EpisodeSelect';
import EpisodesList from './EpisodesList';

const Main = () => {
  console.log(`Main ran`);
  
  return (
    <main className="main-container">
      <p>Main Container</p>
      <div className="controls">
        <ShowSelect />
        <SeasonSelect />
        <EpisodeSelect />
      </div>
      <div>
        <ShowsList/>
        <SeasonsList />
        <EpisodesList />
      </div>
    </main>
  );
};

export default Main;