import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";

const EpisodeSelect = () => {
  console.log(`EpisodeSelect ran`);

  const { episodesData } = useContext(ShowsContext);
  console.log(`EpisodeSelect episodesData:`, episodesData);

  return (
    <div className="episode-select-container">
      <p>Episode Select Container</p>
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`EpisodeSelect onChange ran`);
          console.log(`event`, event);
          // to do
        }}
      >
        <option value="0">Select A Show...</option>
        {episodesData && episodesData.map(episode => {
          return (
            <option 
              key={episode.id} 
              value={episode.id}
            >
              {episode.name}
            </option>
          )
        })}
      </select>
      <button
        onClick={() => {
          // to do
        }}
        >Reset Episode Selection</button>
    </div>
  )

}

export default EpisodeSelect;