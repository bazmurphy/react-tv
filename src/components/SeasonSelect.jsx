import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";

const SeasonSelect = () => {
  console.log(`SeasonSelect ran`);

  const { seasonsData } = useContext(ShowsContext);
  console.log(`SeasonSelect seasonsData:`, seasonsData);

  return (
    <div className="season-select-container">
      <p>Season Select Container</p>
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`SeasonSelect onChange ran`);
          console.log(`event`, event);
          // to do
        }}
      >
        <option value="0">Select A Show...</option>
        {seasonsData && seasonsData.map(season => {
          return (
            <option 
              key={season.id} 
              value={season.id}
            >
              {season.name}
            </option>
          )
        })}
      </select>
      <button
        onClick={() => {
          // to do
        }}
        >Reset Season Selection</button>
    </div>
  )
}

export default SeasonSelect;