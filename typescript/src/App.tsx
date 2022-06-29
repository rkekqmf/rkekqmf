import React from "react";
import "./App.css";

function App() {
  const a: string = "123";
  const b: number = 123;
  const c: boolean = true;
  const d: undefined = undefined;
  const e: null = null;
  console.log(a, b, c, d, e);

  const f: string[] | number[] = ["123", "123"];
  const g: [string, number] = ["123", 123];
  console.log(f, g);

  const h: { hh: string; hhh: string } = { hh: "123", hhh: "12" };
  console.log(h);

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
