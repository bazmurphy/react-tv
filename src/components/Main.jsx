const Main = ({showData}) => {

  return (
    <main className="main-container">
    {showData && showData.map((show) => {
      return (
        <div key={show.id} className="show-container">
          <div className="show-id">id: {show.id}</div>
          <div>name: {show.name}</div>
          <div className="show-image-container">
            <img className="show-image" src={show.image.medium} alt="" />
          </div>
          <div className="show-summary">summary: {show.summary.substring(0, 200)}</div>
          <div className="show-genres">
            genres: 
            {show.genres.map((genre, index) => {
              return (
                <span key={index}>{genre}</span>
            )
          })}
          </div>
          <div className="show-premiered">premiered: {show.premiered}</div>
          <div className="show-rating">rating: {show.rating.average}</div>
        </div>
      )
    })
    }
  </main>
  )
}

export default Main;