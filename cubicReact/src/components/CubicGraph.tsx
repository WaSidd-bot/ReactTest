import { useEffect, useRef } from 'react'

type Props = {
  coefficients: { a: number; b: number; c: number; d: number }
};

export default function plotCubicEquation({ coefficients }: Props) {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = ref.current;

        if (!canvas) {
         return;
        }
        const ctx = canvas.getContext("2d");

        if (!ctx) {
         return;
        }
        const width = canvas.width;
        const height = canvas.height;
        canvas.width = canvas.width //not stupid, to reset canvas without ctx.clearRect command
        ctx.translate(width / 2, height / 2); //draw x and y axis
        ctx.scale(1, -1);

    function cubicFn(x: number) {
        let a = coefficients.a;
        let b = coefficients.b;
        let c = coefficients.c;
        let d = coefficients.d;

        return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
    }

    const scale = 20; 
    const startX = -10; 
    const endX = 10;   
    const step = 0.1;  

    ctx.strokeStyle = '#000000'; //draw axis
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(width / 2, 0);
    ctx.moveTo(0, -height / 2);
    ctx.lineTo(0, height / 2);
    ctx.stroke();

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = startX; x <= endX; x += step) {
        const y = cubicFn(x);
        
        const canvasX = x * scale;
        const canvasY = y * scale;

        if (x === startX) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();
    return () => { 
    };
  }, [coefficients]); //whenever coeeficents change, triggers useEffect again

    return (
        <canvas id="graph" width="600" height="400" ref={ref}></canvas>
    )
}