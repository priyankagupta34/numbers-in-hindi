import "./styles.css";
import f from "./Quiz";
import { useState } from "react";

export default function App() {
  const [ques, setQues] = useState([]);
  const [solk, setsolk] = useState([]);
  const [type, setType] = useState(1);
  return (
    <div className="App">
      <h1 style={{ color: "navy" }}>Quiz Me A Numbers </h1>
      <button
        style={{
          color: "navy",
          background: type === 1 ? "#0909c32e" : "white"
        }}
        onClick={() => {
          setType(1);
          setQues([]);
          setsolk([]);
        }}
      >
        Number to Hindi
      </button>
      <button
        style={{
          color: "navy",
          background: type === 0 ? "#0909c32e" : "white"
        }}
        onClick={() => {
          setType(0);
          setQues([]);
          setsolk([]);
        }}
      >
        Hindi to Number
      </button>
      <br />
      <button
        onClick={() => {
          setQues(f.getFive(1, type));
          setsolk([]);
        }}
      >
        Quize Me 1{" "}
      </button>
      <button
        onClick={() => {
          setQues(f.getFive(2, type));
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
