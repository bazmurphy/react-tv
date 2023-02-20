import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";
import dateStringToEpoch from "../helperFunctions/dateStringToEpoch";
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
            // .sort((a, b) => dateStringToEpoch(b.premiered) - dateStringToEpoch(a.premiered))
            .sort((a, b) => b.rating.average - a.rating.average)
            .map((show) => {
              return (
                <ShowCard key={show.id} show={show} />
              )
        })}
    </div>
  );
};

export default ShowsList;