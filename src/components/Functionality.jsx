const Functionality = ({showData}) => {
  return (
    <div className="functionality-container">
      <span>Functionality</span>
      <select 
        name="" 
        id=""
        onSelect={null}
      >
        <option value="">Select A Show...</option>
        {showData.map(show => {
          return (
            <option key={show.id} value="">{show.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Functionality;