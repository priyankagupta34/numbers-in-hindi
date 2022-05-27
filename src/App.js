import "./styles.css";
import f from "./Quiz";
import { useState } from "react";

export default function App() {
  const [ques, setQues] = useState([]);
  const [solk, setsolk] = useState([]);
  return (
    <div className="App">
      <h1 style={{ color: "navy" }}>Quiz Me A Numbers </h1>
      <button
        onClick={() => {
          setQues(f.getFive(1));
          setsolk([]);
        }}
      >
        Quize Me 1{" "}
      </button>
      <button
        onClick={() => {
          setQues(f.getFive(2));
          setsolk([]);
        }}
      >
        Quize Me 2{" "}
      </button>
      <br />
      <br />
      {ques.map((i) => (
        <span>{i}</span>
      ))}
      <br />
      <br />
      <button onClick={() => setsolk(f.showSolution())}>Show Solution </button>
      <br />
      <br />
      {solk.map((i) => (
        <span>{i}</span>
      ))}
    </div>
  );
}
