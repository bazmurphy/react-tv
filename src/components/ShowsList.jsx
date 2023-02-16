import { useContext } from "react";
import { ShowsContext } from "../context/ShowsProvider";
import ShowCard from "./ShowCard";

const ShowsList = () => {
  console.log(`ShowsList ran`);

  const { showsLoading, showsData, showsError } = useContext(ShowsContext);
  console.log(`ShowsList useContext values:`, `showsLoading`, showsLoading, `showsData`, showsData, `showsError`, showsError);
    
  return (
    <>
      {showsLoading && 
        <div className="shows-list-loading-container">Shows Loading...</div>
      }
      <div className="shows-list-container">
        {showsData && 
          showsData.map((show) => {
            return (
              <ShowCard key={show.id} show={show} />
            )
        })}
      </div>
    </>
  );
};

export default ShowsList;