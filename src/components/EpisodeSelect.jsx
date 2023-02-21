import { useContext } from "react";
import { BazContext } from "../context/BazProvider";

const EpisodeSelect = () => {
  console.log(`EpisodeSelect ran`);

  const { state, dispatch } = useContext(BazContext);
  console.log(`EpisodeSelect state.episodesData:`, state.episodesData);

  return (
    <div className="episode-select-container">
      <p className="component-name">EpisodeSelect.jsx</p>
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`EpisodeSelect onChange ran`);
          const episodeId = event.target.value;
          console.log(`EpisodeSelect onChange episodeId`, episodeId);
          if (episodeId === null) {
            dispatch({type: "clearEpisodeId" });
            return;
          }
          dispatch({type: "setEpisodeId", payload: { episodeId: episodeId }});
        }}
      >
        <option value="0">Select An Episode...</option>
        {state.episodesData && 
          state.episodesData.map(episode => {
            return (
              <option 
                key={episode.id}
                value={episode.id}
              >
                Episode {episode.number} - {episode.name}
              </option>
            )
          })
        }
      </select>
      <button
        onClick={() => {
          dispatch({type: "clearEpisodeId" });
          // and need to change Episode Select to default option
        }}
        >Reset Episode Selection</button>
    </div>
  )

}

export default EpisodeSelect;