import { useContext } from "react";
import { BazContext } from "../context/BazProvider";
import ShowCard from "./ShowCard";

const ShowsList = () => {
  console.log(`ShowsList ran`);
  
  const { state, dispatch } = useContext(BazContext);
  console.log(`ShowsList state.showsData:`, state.showsData);
  
  return (
    <>
      <p className="component-name">ShowsList.jsx</p>
      <div className="shows-list-container">
        {[...state.showsData]
            .sort((show1,show2) => show2.rating.average - show1.rating.average) // Sort By Highest Rating
            .map((show) => {
              return (
                <ShowCard key={show.id} show={show} />
              )
          })
        }
      </div>
    </>
  );
};

export default ShowsList;