const SeasonCard = ( { season } ) => {
  console.log(`SeasonCard ran`);

  return (
    <div className="season-card-container">
      <div className="season-card-image-container">
        <img className="season-card-image" src={season.image.medium} alt="" />
      </div>
      <div className="season-card-copy-container">
        <p className="component-name">SeasonCard.jsx</p>
        <div className="season-card-id">id: {season.id}</div>
        <div className="season-card-season-number">Season {season.number}</div>
        <div className="season-card-start-date">start date: {season.premiereDate}</div>
        <div className="season-card-end-date">end date: {season.endDate}</div>
        <div className="season-card-summary">summary: {season.summary ? season.summary.substring(0, 200) : null}</div>
      </div>
    </div>
  );
};

export default SeasonCard;