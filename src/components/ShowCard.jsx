const ShowCard = ({show}) => {
  console.log(`ShowCard ran`);

  return (
    <div className="show-card-container">
      <p>Show Card Container</p>
      <div className="show-card-id">id: {show.id}</div>
      <div>name: {show.name}</div>
      <div className="show-card-image-container">
        <img className="show-card-image" src={show.image.medium} alt="" />
      </div>
      <div className="show-card-summary">summary: {show.summary.substring(0, 200)}</div>
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
  );
};

export default ShowCard;