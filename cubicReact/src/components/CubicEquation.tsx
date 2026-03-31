import { useState, useRef } from "react";
type Props = {
  coefficients: { a: number; b: number; c: number; d: number }
};

export default function CubicEquation({ coefficients }: Props) {

    let a = coefficients.a;
    let b = coefficients.b;
    let c = coefficients.c;
    let d = coefficients.d;

    let aValue;
    let bValue;
    let cValue;
    let dValue;

    aValue = <span>{a}x^3</span>

    if (b >= 0) {
       bValue = <span>+{b}x^2</span>
    } else {
       bValue = <span>{b}x^2</span>
    }

    if (c >= 0) {
       cValue = <span>+{c}x</span>
    } else {
       cValue = <span>{c}x</span>
    }

    if (d >= 0) {
       dValue = <span>+{d}</span>
    } else {
       dValue = <span>{d}</span>
    }



    return (
        <div>
            <p>{aValue}{bValue}{cValue}{dValue}</p>
        </div>
    );
};

//style the equation in App.css!!!