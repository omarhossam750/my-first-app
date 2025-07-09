import { useState } from "react"

function CounterButton({onClick, content}) {
  return (
    <button className="bg-gray-50 border-2 border-gray-200 cursor-pointer hover:bg-gray-100 active:bg-gray-200 hover:shadow-xl font-mono p-3.5  rounded-xl" onClick={onClick} style={{
      color: content === "Increase" ? "green" : content === "Decrease" ? "darkred" : ""
    }}>{content}</button>
  )
}

export default function CounterApp() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1)
  }
  function restoreCount() {
    setCount(0)
  }
  function decrementCount() {
    setCount(count - 1)
  }

  return (
    <>
      <div className="p-2 flex gap-3">
        <CounterButton onClick={incrementCount} content="Increase" />
        <CounterButton onClick={decrementCount} content="Decrease" />
        <CounterButton onClick={restoreCount} content="Restore" />
      </div>
      <p className="font-sans p-2 text-2xl">Count = {count}</p>
    </>
  )
}
