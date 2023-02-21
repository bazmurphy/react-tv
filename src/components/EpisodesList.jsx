import { useContext } from "react";
import { BazContext } from "../context/BazProvider";
import EpisodeCard from './EpisodeCard';

const EpisodesList = () => {
  console.log(`EpisodesList ran`);

  const { state, dispatch } = useContext(BazContext);
  console.log(`EpisodesList state.episodesData:`, state.episodesData);

  return (
    <>
      <p className="component-name">EpisodesList.jsx</p>
      <div className="episodes-list-container">
        {state.episodesData
              .map((episode) => {
                return (
                  <EpisodeCard key={episode.id} episode={episode} />
                )
            })
          }
      </div>
    </>
  );
};

export default EpisodesList;