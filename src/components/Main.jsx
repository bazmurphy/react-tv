import ShowsSelect from './ShowsSelect';
import ShowsList from './ShowsList'; 

const Main = () => {
  console.log(`Main ran`);
  
  return (
    <main className="main-container">
      <ShowsSelect />
      <ShowsList/>
    </main>
  )
}

export default Main;