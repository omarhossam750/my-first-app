const user = {
  name: "Omar",
  imgURL: "https://tse1.mm.bing.net/th/id/OIP.9uQeXJPOGm7x6d4fFhnXxAHaD4?r=0&pid=Api"
}

export default function ComponentTwo() {
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
