import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";

const ShowsSelect = () => {

  const { showsData, isShowSelected, setIsShowSelected, selectedShowId, setSelectedShowId  } = useContext(ShowsContext);
  console.log(`ShowsList useContext values:`, `showsData`, showsData);
 
  return (
    <div className="show-select-container">
      <select 
        name=""
        id=""
        onChange={(event) => {
          console.log(`ShowsSelect onSelect ran`);
          console.log(`event`, event)
          setIsShowSelected(true);
          setSelectedShowId(event.target.value);
          console.log(`selectedShowId`, selectedShowId);
        }}
      >
        <option value="0">Select A Show...</option>
        {showsData && showsData.map(show => {
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
          setIsShowSelected(false);
          setSelectedShowId(null);
          console.log(`selectedShowId`, selectedShowId);
        }}
        >Reset Selection</button>
    </div>
  )
}

export default ShowsSelect;