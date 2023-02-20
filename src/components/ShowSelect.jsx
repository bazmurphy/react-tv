import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";

const ShowSelect = () => {
  console.log(`ShowsSelect ran`);

  // const { showsData, isShowSelected, setIsShowSelected, selectedShowId, setSelectedShowId  } = useContext(ShowsContext);
  // console.log(`ShowsList useContext values:`, `showsData`, showsData);

  const { showsData } = useContext(ShowsContext);
  console.log(`ShowsSelect showsData`, showsData);
 
  return (
    <div className="show-select-container">
      <p>Show Select Container</p>
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`ShowSelect onChange ran`);
          console.log(`event`, event)
          // setIsShowSelected(true);
          // setSelectedShowId(event.target.value);
          // console.log(`selectedShowId`, selectedShowId);
        }}
      >
        <option value="0">Select A Show...</option>
        {showsData && 
          showsData.map(show => {
            return (
              <option 
                key={show.id} 
                value={show.id}
              >
                {show.name}
              </option>
            )
        })}
      </select>
      <button
        onClick={() => {
          // setIsShowSelected(false);
          // setSelectedShowId(null);
          // console.log(`selectedShowId`, selectedShowId);
        }}
        >Reset Show Selection</button>
    </div>
  )
}

export default ShowSelect;