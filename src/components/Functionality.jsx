const Functionality = ({showsData}) => {
  return (
    <div className="functionality-container">
      <span>Functionality</span>
      <select 
        name=""
        id=""
        onSelect={null}
      >
        <option value="">Select A Show...</option>
        {showsData.map(show => {
          return (
            <option 
              key={show.id} 
              value={show.id}>
                {show.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Functionality;