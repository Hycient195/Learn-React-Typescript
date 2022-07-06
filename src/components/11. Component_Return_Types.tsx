export default function ComponentReturnTypes(): JSX.Element{
  return(
    <>
      <h1>Component Return Type</h1>
      <p>
        Automatically, whenever a component is defined, its return Type
        is "JSX.Element", but to be explicitly declarative, one could 
        optionally add the return type to the component on its declaration
        as shown in the example below
      </p>
      <code>
        <pre>
          {
            `
            export default function ComponentReturnTypes(): JSX.Element{
              return(
                <>
                  <h1>Component Return Type</h1>
                </>
              )
            }
            `
          }
        </pre>
      </code>
    </>
  )
}