const EpisodeCard = ( { episode } ) => {
  console.log(`EpisodeCard ran`);
  
  return (
    <div className="episode-card-container">
      <div className="episode-card-copy-container">
        <p className="component-name">EpisodeCard.jsx</p>
        <div className="episode-card-id">id: {episode.id}</div>
        <div className="episode-card-season-number-episode-number">Season {episode.season} Episode {episode.number}</div>
        <div className="epsiode-card-name">"{episode.name}"</div>
        <div className="episode-card-airdate">air date: {episode.airdate}</div>
        <div className="episode-card-image-container">
          <img className="episode-card-image" src={episode.image.medium} alt="" />
        </div>
        <div className="episode-card-summary">summary: {episode.summary.substring(0, 200)}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;