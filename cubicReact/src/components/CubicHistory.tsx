import React, { useState, useEffect} from "react";

type Props = {
  coefficients: { a: number; b: number; c: number; d: number },
  onRowClick: (data: { a: number; b: number; c: number; d: number }) => void;
};

export default function StateHistoryExample({coefficients, onRowClick}: Props) {
  // history[history.length - 1] is the current value
  const [history, setHistory] = useState<Props["coefficients"][]>([]);

  useEffect(() => {
    setHistory((prev) => {
        const last = prev.length - 1;
        const previous = prev[last];

        if(previous && previous.a == coefficients.a &&
            previous.b === coefficients.b &&
            previous.c === coefficients.c &&
            previous.d === coefficients.d) {
            return prev;
        }
        return [...prev, coefficients]});
  }, [coefficients]);

    const handleRowClick = (rowData:  {a: number; b: number; c: number; d: number;}) => {
    console.log("Clicked row values:", rowData);

    onRowClick({
      a: Number(rowData.a),
      b: Number(rowData.b),
      c: Number(rowData.c),
      d: Number(rowData.d),
    });
    // Access specific fields: rowData.id, rowData.name, etc.
  };

return (
    <table className="cubicHistory">
      <thead>
        <tr>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={index} onClick={() => handleRowClick(item)}>
            <td>{item.a}</td>
            <td>{item.b}</td>
            <td>{item.c}</td>
            <td>{item.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}