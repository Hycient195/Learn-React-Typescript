type Prefix = 'margin' | 'padding'
  
type Suffix =  'left' | 'right' | 'top' | 'bottom';

type StyleProperty = {
  property: `${Prefix}-${Suffix}`
}

export default function TemplateLiteralTypes({property}: StyleProperty){

  
  return(
    <>
      <h1>Template Literal Types</h1>
      <p>
        The template literal type is a type used to comibine unions of string 
        literal types, in all possible combination patterns, in order to create 
        a new type.
      </p>
      <p>
        Let's see a practical example below for specifying a style property to a 
        component.
      </p>
      <code>
        <pre>
          {
            `
            type Prefix = 'margin' | 'padding'
  
            type Suffix =  'left' | 'right' | 'top' | 'bottom';

            type StyleProperty = {
              property: \`\${Prefix}-\${Suffix}\`
            }

            export default function TemplateLiteralTypes({property}: StyleProperty){

              
              return(
                <>
                  <h3>Property Provided is {property}</h3>
                </>
              )
            }


            // In App.tsx

            <TemplateLiteralTypes property="margin-right" />  // allowed
            <TemplateLiteralTypes property="margin-center" />  // not allowed
          `
          }
        </pre>
      </code>
      <p>
        By using a string literal to combine the unions "Previx" and "Suffix", it
        entails that the property "property" in the type "StyleProperty" has value of
        all possible combination of the constituents of "Prefix" and "Suffix", which are
        "margin-left" | "margin-right" | "margin-top" | "margin-bottom" | "padding-left" |
         "padding-right" | "padding-top" | "padding-bottom"
      </p>
      <p>
        The concept above can also be acheved with string literals, but making use
        of template literaly makes it easier and more dynamic.
      </p>

      <h3>Output:</h3>
      <h3>Property Provided is {property}</h3>
    </>
  )
}