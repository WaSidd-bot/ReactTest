import { useState, useRef } from "react";
type Props = {
  onSubmit: (data: { a: number; b: number; c: number; d: number }) => void;
};

export default function CubicInput({ onSubmit }: Props) {
    const [form, setForm] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      a: Number(form.a),
      b: Number(form.b),
      c: Number(form.c),
      d: Number(form.d),
    });
  };
    return (
        <div>
            <h1>Cubic Solver</h1>
            <form className="ui-elements" id="form" onSubmit={handleSubmit}>
                <label>a-value:</label>
                <label>b-value:</label>
                <label>c-value:</label>
                <label>d-value:</label>
                <input type="number" className="inputs" id="a" name="a" onChange={handleChange}/>
                <input type="number" className="inputs" id="b" name="b" onChange={handleChange}/>
                <input type="number" className="inputs" id="c" name="c" onChange={handleChange}/>
                <input type="number" className="inputs" id="d" name="d" onChange={handleChange}/>
                <input type="submit" className="button" value="calculate" name="submit" />
                <input type="text" id="result" name="result" />
            </form>
        </div>
    );
};

