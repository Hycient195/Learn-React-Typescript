type TUser<T> = {
  name: T,
  hobbies: T[]
}

export default function GenericProps <T extends string > ({name, hobbies}: TUser<T>){
  return(
    <>
      <h1>Generic Props</h1>
      <p>
        A generic prop is simply a mechanism used to constrain the values of props to 
        to a particularly defined type, which extends from an already existing type, or
        type structure.
      </p>
      <p>
        Let's see an example below
      </p>
      <code>
        <pre>
          {
            `
            type TUser<T> = {
              name: T,
              hobbies: T[]
            }
            
            export default function GenericProps <T extends string > ({name, hobbies}: TUser<T>){
              return(
                <>     
                  <h3>Name is {name}</h3>
                  <h4>Hobbies are {hobbies.map(hobby => <span>{hobby}, </span>)}</h4>
                </>
              )
            }
            `
          }
        </pre>
      </code>
      <p>
        Passing arguments to the "GenericProps" component from App.tsx
      </p>
      <code>
        <pre>
          {
            `
            <GenericProps name="DummyName" hobbies={["Swimming", "Running"]} />
            `
          }
        </pre>
      </code>
      <p>
        From the example above, the type alias TUser receives a generic type {`${`<T>`}`},
        as a generic argument. It is then used to type the props received by the component, and the
        value of T is then specified to extend "string", meaning that T for both the name and
        hobbies property must be of type "string".
      </p>
      <h3>Output:</h3>
      <h3>Name is {name}</h3>
      <h4>Hobbies are {hobbies.map(hobby => <span>{hobby}, </span>)}</h4>
    </>
  )
}