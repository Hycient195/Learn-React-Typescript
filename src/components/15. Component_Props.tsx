type TComponent = {
  Component: React.ComponentType;
}

export default function ComponentProps({ Component }: TComponent){

  return(
    <>
      <h1>Component Props</h1>

      <p>
        We have previously learnt how to pass element as props from a parent
        component, to a child component. However, case is a little bit different,
        when a custom component is passed as a prop to another component.
      </p>
      <p>
        In other to pass a custom component as props to another component is 
        should have a type of <strong>"React.ComponentType"</strong>.
      </p>
      <p>
        Let's see how this comes into play in the example below.
      </p>

      <code>
        <pre>
          {
            `
            type TComponent = {
              Component: React.ComponentType;
            }
            
            export default function ComponentProps({ Component }: TComponent){
              return(
                <>            
                  <Component />
                </>
              )
            }
            `
          }
        </pre>
      </code>
      <p>
        A component can now be passed as prop to the child component as shown
        below
      </p>

      <code>
        <pre>
          {
            `
            <ComponentProps Component={ComponentReturnTypes} />
            `
          }
        </pre>
      </code>

      <p>
        Below here is the output of the component
      </p>

      <Component />
    </>
  )
}