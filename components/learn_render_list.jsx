export default function ListComponent() {
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
