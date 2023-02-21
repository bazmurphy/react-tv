import { useContext } from "react";
import { BazContext } from "../context/BazProvider";

const SeasonSelect = () => {
  console.log(`SeasonSelect ran`);

  const { state, dispatch } = useContext(BazContext);
  console.log(`SeasonSelect state.seasonsData:`, state.seasonsData);

  return (
    <div className="season-select-container">
      <p className="component-name">SeasonSelect.jsx</p>
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`SeasonSelect onChange ran`);
          const seasonId = event.target.value;
          console.log(`SeasonSelect onChange seasonId`, seasonId);
          if (seasonId === null) {
            dispatch({type: "clearSeasonId" });
            return;
          }
          dispatch({type: "setSeasonId", payload: { seasonId: seasonId }})
          // seasonId ? dispatch({type: "clearSeasonId" }) : dispatch({type: "setSeasonId", payload: { seasonId: seasonId }});
        }}
      >
        <option value={null}>Select A Season...</option>
        {state.seasonsData && 
          state.seasonsData.map(season => {
            return (
              <option 
                key={season.id} 
                value={season.id}
              >
                Season {season.number}
              </option>
            )
          })
        }
      </select>
      <button
        onClick={() => {
          dispatch({type: "clearSeasonId" });
          // and need to change Season Select to default option
        }}
        >Reset Season Selection</button>
    </div>
  )
}

export default SeasonSelect;