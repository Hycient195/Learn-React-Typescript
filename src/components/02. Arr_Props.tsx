type TUsers = {
  users: {
    name: string,
    age: number,
    isActive: boolean
  }[]
}

export default function ObjAndArrProps(props: TUsers){
  return(
    <div>
      <h1>Array Props</h1>
      {
        props.users.map( user=>(
            <h3>{user.name} is {user.age} years and is {user.isActive ? "active" : "not active"} </h3>
        ))
      }
    </div>
  )
}