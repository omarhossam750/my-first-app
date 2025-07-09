import { useRef } from "react"

export default function TodoApp() {
  const inputRef = useRef(null);
    
  const todos = [{
    id: 1, title: "Study Coding"
  }];
  function addTodo(todoTitle) {
    if (todoTitle === "") {
      window.alert("Please enter a valid todo title!")
      return;
    }
    todos.push({id: todos.length + 1, title: todoTitle})
    inputRef.current.value = "";
  }

  return (
    <div className="max-w-md bg-gray-50 border-2 border-slate-200 rounded-sm mx-auto mt-2">
      <div className="flex p-4">
        <input ref={inputRef} className="border-slate-200 p-1.5 border-2 border-r-0 rounded-l-lg outline-0 focus:border-blue-500" type="text" placeholder="Enter todo title." />
        <button className="bg-slate-800 rounded-r-lg text-white font-sans w-full cursor-pointer" onClick={() => addTodo(inputRef.current.value)}>Add Todo</button>
      </div>
      <ol className="pl-5 mb-4 list-decimal list-inside">
        {todos.map(todo => 
          <li key={todo.id}>{todo.title}</li>
        )}
      </ol>
    </div>
  )
}
