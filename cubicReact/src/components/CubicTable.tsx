import { useState, useRef } from "react";
type Props = {
  coefficients: { a: number; b: number; c: number; d: number }
};

export default function CubicTable({ coefficients }: Props) {
    let rootXOne: number | string;
    let rootXTwo: number | string;
    let rootXThree: number | string;

    rootXOne = 0;
    rootXTwo = 0; 
    rootXThree = 0;

    const a = coefficients.a;
    const b = coefficients.b;
    const c = coefficients.c;
    const d = coefficients.d;

    const discriminant = b **2 * c **2 - 4 * a * c **3 - 4 * b **3 * d - 27 * a **2 * d **2 + 18 * a * b * c * d; //not a depressed cubic discriminant
    const pValue = (3 * a * c - Math.pow(b, 2)) / (3 * Math.pow(a, 2));
    const qValue = (27 * Math.pow(a, 2) * d - 9 * a * b * c + 2 * Math.pow(b, 3)) / (27 * Math.pow(a, 3));
    const kValue = 2 * (Math.sqrt(-pValue / 3));
    const thetaAngle = (1 / 3) * Math.acos(-(qValue) / (2 * Math.sqrt(-(Math.pow(pValue, 3)) / Math.pow(3, 3))));

    if (discriminant < 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));
        rootXTwo = "Complex";
        rootXThree = "Complex";

    } else if (discriminant > 0) { //discriminant is not depressed cubic, so greater than zero will have trigonometric method
        rootXOne = kValue * Math.cos(thetaAngle) - (b / (3 * a));
        rootXTwo = kValue * Math.cos(thetaAngle + (2 * Math.PI / 3)) - (b / (3 * a));
        rootXThree = kValue * Math.cos(thetaAngle + (4 * Math.PI / 3)) - (b / (3 * a));

    } else if (pValue == 0 && qValue == 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));
        rootXTwo = rootXThree = rootXOne;
    } else if (pValue != 0) {
        rootXOne = Math.cbrt((-qValue / 2) + Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) + Math.cbrt((-qValue / 2) - Math.sqrt(Math.pow(qValue / 2, 2) + Math.pow(pValue / 3, 3))) - (b / (3 * a));
        rootXTwo = Math.cbrt(qValue / 2) - (b / (3 * a));
        rootXThree = rootXTwo;
    }

    return (
        <div>
            <table>
                <tr>
                    <td>p value</td>
                    <td id="pDisplay">{pValue}</td>
                </tr>
                <tr>
                    <td>q value</td>
                    <td id="qDisplay">{qValue}</td>
                </tr>
                <tr>
                    <td>discriminant</td>
                    <td id="discriminant">{discriminant}</td>
                </tr>
                <tr>
                    <th>Values</th>
                    <th>X</th>
                    <th>Y</th>
                </tr>
                <tr>
                    <td>FirstRoot</td>
                    <td id="rootXOne">{rootXOne}</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>SecondRoot</td>
                    <td id="rootXTwo">{rootXTwo}</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>ThirdRoot</td>
                    <td id="rootXThree">{rootXThree}</td>
                    <td>0</td>
                </tr>

            </table>
        </div>
    );
};