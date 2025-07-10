import { useRef, useState, useEffect } from "react";

export default function TodoApp() {
  const inputRef = useRef(null);
  
  let [todos, setTodos] = useState([]);

  function addTodo(todoTitle) {
    const trimmedTitle = todoTitle.trim()
    if (trimmedTitle === "") {
      window.alert("Please enter a valid todo title!")
      return;
    }
    
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Date.now(), title: trimmedTitle}
    ])
    
    inputRef.current.value = "";
  }

  return (
    <div className="max-w-2xl bg-gray-50 border-2 border-slate-200 rounded-lg mx-auto mt-2">
      <div className="flex p-4">
        {/* INPUT */}
        <input ref={inputRef} className="border-slate-200 p-1.5 border-2 w-2/3 border-r-0 rounded-l-lg outline-0 focus:border-blue-500" type="text" placeholder="Enter todo title." />
        
        {/* BUTTON */}
        <button className="bg-slate-800 rounded-r-lg text-white font-sans w-1/3 cursor-pointer" onClick={() => addTodo(inputRef.current.value)}>Add Todo</button>
      </div>
      <ol className="pl-5 mb-4 list-decimal list-inside">
        {todos.map(todo => 
          <li key={todo.id}>{todo.title}</li>
        )}
      </ol>
    </div>
  )
}
