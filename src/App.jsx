import Buttons from "./components/Buttons";
import Banner from './components/Banner';
import Table from "./components/Table";
import { useState } from 'react';
import satData from './components/satData';

function App() {
  const [sat, setSat] = useState(satData);
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    console.log(displaySats)
    setSat(displaySats);
  }

  return (
    <div>
      <Banner/>
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;