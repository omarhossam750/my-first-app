import { useState } from "react";

function ComponentOne() {
  return (
    <div className="p-8 bg-gray-600 text-white m-3 rounded-xl">
      <h1 className="text-3xl mb-5">Welcome to my Project</h1>
      <MyButton />

    </div>
  )
}

function ComponentTwo() {
  return (
    <div className="p-4 mx-auto max-w-sm flex items-center flex-cols shadow-lg mt-4 gap-4">
      <h1 className="text-2xl font-semibold">Hello, {user.name}!</h1>
      <img src={user.imgURL}
      alt={'Photo of ' + user.name}
      className="w-36 h-32 rounded-2xl object-right border-amber-300 border-4 object-cover"
      />
    </div>
  )
}

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

function MyButton() {
  return (
    <button className="bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 text-2xl py-1.5 px-3 cursor-pointer rounded-md font-bold font-sans">Click Me</button>
  )
}

const user = {
  name: "Omar",
  imgURL: "https://tse1.mm.bing.net/th/id/OIP.9uQeXJPOGm7x6d4fFhnXxAHaD4?r=0&pid=Api"
}

function AdminPage() {
  return (
    <h1>Admin Page.</h1>
  )
}

function LoginPage() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <input type="submit" value={"Login"} />
    </form>
  )
}

let isLoggedIn = false;

function ListComponent() {
  const students = [
    { name: "Omar", isAtCampus: true, id: 1 },
    { name: "Hany", isAtCampus: true, id: 2 },
    { name: "Ahmed", isAtCampus: false, id: 3 },
    { name: "Osama", isAtCampus: true, id: 4 },
    { name: "Farouk", isAtCampus: false, id: 5 },
    { name: "Ziad", isAtCampus: true, id: 6 }
  ]

  const listItems = students.map(student => 
    <li key={student.id} style={{
      color: student.isAtCampus ? "green" : "red"
    }}>
      {student.name}
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

function CounterButton({onClick, content}) {
  return (
    <button className="bg-gray-50 border-2 border-gray-200 cursor-pointer hover:bg-gray-100 active:bg-gray-200 hover:shadow-xl font-mono p-3.5  rounded-xl" onClick={onClick} style={{
      color: content === "Increase" ? "green" : content === "Decrease" ? "darkred" : ""
    }}>{content}</button>
  )
}

export default function App() {
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