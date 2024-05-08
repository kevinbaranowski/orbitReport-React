import satData from "./satData";
import './styling.css'

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  const typeButtons = orbitTypes.map((type, index) => {
    return (
      <button 
        key={index} 
        onClick={() => filterByType(type)} 
      >
        {type} Orbit
      </button>
    )
  })
  return (
    <div className='flex-container'>
      {typeButtons}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;