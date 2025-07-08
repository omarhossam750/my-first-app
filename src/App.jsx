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

export default function App() {
  return (
    <div>
      {isLoggedIn ? (<AdminPage />) : (<LoginPage />)}
    </div>
  )
}