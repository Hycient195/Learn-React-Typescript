import React from "react"
import TemplateLiteralTypes from "./18. Template_Literal_Types"

export default function ExtractCompProp({property}: React.ComponentProps<typeof TemplateLiteralTypes>){
  return(
    <>
      <h1>Extracting Component Props</h1>
      <p>
        Extraction of Component types is a technique used to specify prop types for a
        component, using types extracted from another component,
      </p>
      <p>
        This is acheived by importing the component whoose prop types are to be extracted,
        and passing its type (using "typeof") as a generic argument to "React.ComponentProps".
      </p>
      <p>
        Let's see how this plays out as shown in the example below.
      </p>
      <code>
        <pre>
          {
            `
            import React from "react"
            import TemplateLiteralTypes from "./18. Template_Literal_Types"

            export default function ExtractCompProp({property}: React.ComponentProps<typeof TemplateLiteralTypes>){
              return(
                <>
                  <h3>Property {property} is obtained from the template literal Component</h3>
                </>
              )
            }

            
            // Reusing an allowed prop value of <TemplateLiteralType/> 
            component on our compnent, in App.tsx

            <ExtractCompProp property='padding-top' />
            `
          }
        </pre>
      </code>

      <h3>Output:</h3>
      <h3>Property "{property}" is obtained from the template literal Component</h3>
    </>
  )
}