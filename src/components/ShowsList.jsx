import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";
// import dateStringToEpoch from "../helperFunctions/dateStringToEpoch";
import ShowCard from "./ShowCard";

const ShowsList = () => {
  console.log(`ShowsList ran`);
  
  const { showsData } = useContext(ShowsContext);
  console.log(`ShowsList showsData:`, showsData);
    
  return (
    <div className="shows-list-container">
      <p>Shows List Container</p>
      {/* {showsLoading && 
        <div className="shows-list-loading-container">Shows Loading...</div>
      } */}
        {showsData && 
          showsData
            .map((show) => {
              return (
                <ShowCard key={show.id} show={show} />
              )
        })}
    </div>
  );
};

export default ShowsList;