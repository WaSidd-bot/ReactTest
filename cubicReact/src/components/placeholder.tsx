import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const expensiveCalculation = (event:any) => {
    event.preventDefault();
    console.log("Running expensive calculation...");

    const formData = new FormData(event.currentTarget);

    const a: number = Number(formData.get("a"));
    const b: number = Number(formData.get("b"));
    const c: number = Number(formData.get("c"));
    const d: number = Number(formData.get("d"));

    let rootXOne: number | string;
    let rootXTwo: number | string;
    let rootXThree: number | string;

    let rootYOne: number = 0;
    let rootYTwo: number = 0;
    let rootYThree: number = 0;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    const discriminant = b **2 * c **2 - 4 * a * c **3 - 4 * b **3 * d - 27 * a **2 * d **2 + 18 * a * b * c * d; //not a depressed cubic discriminant
    const pValue = (3 * a * c - Math.pow(b, 2)) / (3 * Math.pow(a, 2));
    const qValue = (27 * Math.pow(a, 2) * d - 9 * a * b * c + 2 * Math.pow(b, 3)) / (27 * Math.pow(a, 3));
    const kValue = 2 * (Math.sqrt(-pValue / 3));
    const thetaAngle = (1 / 3) * Math.acos(-(qValue) / (2 * Math.sqrt(-(Math.pow(pValue, 3)) / Math.pow(3, 3))));

    (document.getElementById("pDisplay") as HTMLElement).textContent = pValue.toString();
    (document.getElementById("qDisplay") as HTMLElement).textContent = qValue.toString();
    (document.getElementById("discriminant") as HTMLElement).textContent = discriminant.toString();

    console.log(discriminant);

    if (discriminant < 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));
        rootXTwo = "Complex";
        rootXThree = "Complex";

        (document.getElementById("rootXOne") as HTMLElement).textContent = rootXOne.toString();
        (document.getElementById("rootXTwo") as HTMLElement).textContent = rootXTwo.toString();
        (document.getElementById("rootXThree") as HTMLElement).textContent = rootXThree.toString();
    } else if (discriminant > 0) { //discriminant is not depressed cubic, so greater than zero will have trigonometric method
        rootXOne = kValue * Math.cos(thetaAngle) - (b / (3 * a));
        rootXTwo = kValue * Math.cos(thetaAngle + (2 * Math.PI / 3)) - (b / (3 * a));
        rootXThree = kValue * Math.cos(thetaAngle + (4 * Math.PI / 3)) - (b / (3 * a));

        (document.getElementById("rootXOne") as HTMLElement).textContent = rootXOne.toString();
        (document.getElementById("rootXTwo") as HTMLElement).textContent = rootXTwo.toString();
        (document.getElementById("rootXThree") as HTMLElement).textContent = rootXThree.toString();
    } else if (pValue == 0 && qValue == 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));

        (document.getElementById("rootXOne") as HTMLElement).textContent = rootXOne.toString();
        (document.getElementById("rootXTwo") as HTMLElement).textContent = rootXOne.toString();
        (document.getElementById("rootXThree") as HTMLElement).textContent = rootXOne.toString();
    } else if (pValue != 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));
        rootXTwo = Math.cbrt(qValue / 2) - (b / (3 * a));

        (document.getElementById("rootXOne") as HTMLElement).textContent = rootXOne.toString();
        (document.getElementById("rootXTwo") as HTMLElement).textContent = rootXTwo.toString();
        (document.getElementById("rootXThree") as HTMLElement).textContent = rootXTwo.toString();
    }
  };

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cubic Solver</h1>
  <form className="ui-elements" id="form" onSubmit={expensiveCalculation}>
    <label>a-value:</label>
    <label>b-value:</label>
    <label>c-value:</label>
    <label>d-value:</label>
    <input type="number" className="inputs" id="a" name="a"/>
    <input type="number" className="inputs" id="b" name="b"/>
    <input type="number" className="inputs" id="c" name="c"/>
    <input type="number" className="inputs" id="d" name="d"/>
    <input type="submit" className="button" value="calculate" name="submit" />
    <input type="text" id="result" name="result"/>
  </form>

  <canvas id="graph" width="600" height="400"></canvas>

  <table>
    <tr>
      <td>p value</td>
      <td id="pDisplay">0</td>
    </tr>
    <tr>
      <td>q value</td>
      <td id="qDisplay">0</td>
    </tr>
    <tr>
      <td>discriminant</td>
      <td id="discriminant">0</td>
    </tr>
    <tr>
      <th>Values</th>
      <th>X</th>
      <th>Y</th>
    </tr>
    <tr>
      <td>FirstRoot</td>
      <td id="rootXOne"></td>
      <td>0</td>
    </tr>
    <tr>
      <td>SecondRoot</td>
      <td id="rootXTwo"></td>
      <td>0</td>
    </tr>
    <tr>
      <td>ThirdRoot</td>
      <td id="rootXThree"></td>
      <td>0</td>
    </tr>

  </table>

  <script src="/src/cubicSolver.ts" type="module"></script>
  <script src="/src/canvas.js"></script>
    </>
  )
}

export default App
