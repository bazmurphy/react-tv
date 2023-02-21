import { useContext } from "react";
import { BazContext } from "../context/BazProvider";

const ShowSelect = () => {
  console.log(`ShowsSelect ran`);

  const { state, dispatch } = useContext(BazContext);
  console.log(`ShowsSelect state.showsData`, state.showsData);
 
  return (
    <div className="show-select-container">
      <p className="component-name">ShowSelect.jsx</p>
      <select 
        name=""
        id="" 
        onChange={(event) => {
          console.log(`ShowSelect onChange ran`);
          const showId = event.target.value;
          console.log(`ShowSelect onChange showId: ${showId}`);
          if (showId === null) {
            dispatch({type: "clearShowId" });
            return;
          }
          dispatch({type: "setShowId", payload: {showId: showId}});
          // showId ? dispatch({type: "clearShowId" }) : dispatch({type: "setShowId", payload: {showId: showId}});
        }}
      >
        <option value={null}>Select A Show...</option>
        {state.showsData && 
          [...state.showsData]
            .sort((show1, show2) => show1.name.localeCompare(show2.name)) // sort Alphabetically
            .map(show => {
              return (
                <option 
                  key={show.id} 
                  value={show.id}
                >
                  {show.name}
                </option>
              )
            })
        }
      </select>
      <button
        onClick={() => {
          dispatch({type: "clearShowId" });
          // and need to change Season Select to default option
        }}
        >Reset Show Selection</button>
    </div>
  )
}

export default ShowSelect;