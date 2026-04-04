import CubicInput from "./components/CubicInput.tsx";
import CubicTable from "./components/CubicTable.tsx";
import CubicEquation from "./components/CubicEquation.tsx";
import CubicGraph from "./components/CubicGraph.tsx";
import CubicHistory from "./components/CubicHistory.tsx";
import { useState } from 'react'
import './App.css'

function App() {
  const [coefficients, setCoefficients] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  });

  return (
    <>
      <div>
       <CubicInput onSubmit={setCoefficients}/>
       <CubicTable coefficients={coefficients}/>
       <CubicEquation coefficients={coefficients}/>
       <CubicGraph coefficients={coefficients}/>
       <CubicHistory onRowClick={setCoefficients} coefficients={coefficients}/>
      </div>
    </>
  )
}

export default App
