import Show from "./Show";

const Main = ({showsData}) => {

  return (
    <main className="main-container">
    {showsData && showsData.map((show) => {
      return (
        <Show key={show.id} show={show} />
      )
    })
    }
  </main>
  )
}

export default Main;