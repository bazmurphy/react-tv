const ShowCard = ( { show } ) => {
  console.log(`ShowCard ran`);

  return (
    <div className="show-card-container">
      <div className="show-card-image-container">
        <img className="show-card-image" src={show.image.medium} alt="" />
      </div>
      <div className="show-card-copy-container">
        <p className="component-name">ShowCard.jsx</p>
        <div className="show-card-id">id: {show.id}</div>
        <div className="show-card-name">{show.name}</div>
        <div className="show-card-summary">{show.summary.substring(0, 200)}</div>
        <div className="show-card-genres">genres: 
          {show.genres.map((genre, index) => {
            return (
              <span key={index}>{genre}</span>
          )
        })}
        </div>
        <div className="show-card-premiered">premiered: {show.premiered}</div>
        <div className="show-card-rating">rating: {show.rating.average}</div>
      </div>
    </div>
  );
};

export default ShowCard;