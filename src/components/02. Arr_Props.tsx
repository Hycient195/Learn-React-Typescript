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
      <p>
        Just as an object can be passed as prop in the same way an
        array can also be passed as prop to a react component. When an
        array is to be passed as the content of a prop, its type alias
        can then be assigned an array of any type (eg "string[] for string array",
        "number[]" for number array, etc). In the example above, an Array
        of object is specified as in the type alias, and to even be more specific
        the properties which every object in the array is to contained is also
        specified thereinm as shown in the example below.
      </p>
      <code>
        <pre>
          {`
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
                  {
                    props.users.map( user=>(
                        <h3>{user.name} is {user.age} years and is {user.isActive ? "active" : "not active"} </h3>
                    ))
                  }
                </div>
              )
            }
          `}
        </pre>
      </code>
      <h2>Outputs: </h2>
      {
        props.users.map( user=>(
            <h3>{user.name} is {user.age} years and is {user.isActive ? "active" : "not active"} </h3>
        ))
      }
    </div>
  )
}