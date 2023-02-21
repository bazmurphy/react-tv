import { useContext } from "react";
import { BazContext } from "../context/BazProvider";
import SeasonCard from "./SeasonCard";

const SeasonsList = () => {
  console.log(`SeasonsList ran`);

  const { state, dispatch } = useContext(BazContext);
  console.log(`SeasonsList state.seasonsData:`, state.seasonsData);

  return (
    <>
      <p className="component-name">SeasonsList.jsx</p>
      <div className="seasons-list-container">
        {state.seasonsData
            .map((season) => {
              return (
                <SeasonCard key={season.id} season={season} />
              )
          })
        }
      </div>
    </>
  );
};

export default SeasonsList;