import { useState } from "react";
import TodoApp from "./../components/todos";
import CounterApp from "./../components/counter";
import "./styles.css"

function HelloMsg() {
  return (
    <h1 className="helloMsg font-bold m-5 p-4 text-xl text-center shadow-2xl font-sans rounded-xl">Hello 
      <span>Yarn,</span>
      <span>Vite,</span>
      <span>React</span> 
      and 
      <span>Tailwind!</span></h1>
  )
}

export default function App() {
  return (
    <TodoApp />
  )
}
