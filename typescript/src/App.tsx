import React from "react";
import "./App.css";

function App() {
  type Name = string[] | number;
  const nameYong: Name = 123;

  function funcYong(x: number) {
    return x * 2;
  }

  type Member = [number, boolean, string];
  const memberYong: Member = [29, true, "이름"];

  type Game = {
    [key: string]: string | number;
  };
  const lol: Game = { name: "lol", age: 123 };

  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  return (
    <div className="App">
      <p>{nameYong}</p>
      <p>{funcYong(1.2)}</p>
      <p>{memberYong}</p>
      <p>{lol.age}</p>
    </div>
  );
}

export default App;
