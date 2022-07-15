type exists = {
  exists: boolean
}

type isVisible = exists & {
  isVisible: boolean,
  isHidden?: never
}

type isHidden = exists & {
  isHidden: boolean,
  isVisible?: never
}

type Tstatus = isVisible | isHidden;

export default function RestrictProps({exists, isVisible, isHidden}: Tstatus){
  return(
    <>
      <h1>Restricting Props</h1>
      <p>
        Props restriction is a practice implemented to disallow two or more props of
        antagonizing values to be passed at the same time to a component.
      </p>
      <p>
        A practical application may me taking a component "RestrictProps",
        this component is meant to receive properties "exists" and "isHidden"
        or "isVisible", (and not both "isHidden", and "isVisible" at the same time)
        the way to go about this is with the implemtation of Props Restriction.
      </p>
      <p>
        Let's see how we can implement prop restriction in a component as shown in the 
        example below
      </p>

      <code>
        <pre>
          {
            `
            type exists = {
              exists: boolean
            }
            
            type isVisible = exists & {
              isVisible: boolean,
              isHidden?: never
            }
            
            type isHidden = exists & {
              isHidden: boolean,
              isVisible?: never
            }
            
            type Tstatus = isVisible | isHidden;
            
            export default function RestrictProps({exists, isVisible, isHidden}: Tstatus){
              return(
                <>        
                  <h3>{exists && '"exists" prop passed'}</h3>
                  <h3>{isVisible && '"isVisible" prop passed'}</h3>
                  <h3>{isHidden && '"isHidden" prop passed'}</h3>
                </>
              )
            }


            // in App.tsx

            <RestrictProps exists={true} isHidden={true}/> or
            <RestrictProps exists={true} isHidden}/> // works the same way
            `
          }
        </pre>
      </code>
      <p>
        From the example above, the "isVisible" and "isHidden" types build on the
        "exists" type, and both types declare each other's allowed property as "never"
        in their type aliases, meaning that where one exists, the other should not be passed
        or should not exist.
      </p>
      <p>
        These two types ("isVisible" and "isHidden") are then used a union of types to a 
        new type "Tstatus" which is assigned as type to the props reseived, meaning that
        at any call of the component, either "isVisible" or "isHidden" is used, translating
        to the fact that all three properties cannot be passed at the same time.
      </p>

      <h3>Output:</h3>
      <h3>{exists && '"exists" prop passed'}</h3>
      <h3>{isVisible && '"isVisible" prop passed'}</h3>
      <h3>{isHidden && '"isHidden" prop passed'}</h3>
    </>
  )
}