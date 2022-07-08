import { TArticle } from './09. Descructuring_Props'

type TComponent = {
  Component: React.ComponentType<TArticle>;
}

export default function ComponentProps({ Component }: TComponent){

  return(
    <>
      <h1>Component Props</h1>

      <p>
        We have previously learnt how to pass element as props from a parent
        component, to a child component. However, it is a little bit different,
        when a custom component is passed as a prop to another component.
      </p>
      <p>
        In other to pass a custom component as props to another component, the
        child component's props should have a type of <strong>"React.ComponentType"</strong>
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
        Additonally if the component passed as props receives an input argument, the
        input argument type can be exported and passed as a generic argument to "React.Component", as
        seen below.
      </p>

      <code>
        <pre>
          {
            `
            type TComponent = {
              Component: React.ComponentType<TArticle>;
            }
            `
          }
        </pre>
      </code>

      <p>
        Below here is the output of the component
      </p>

      <Component article={{
        name: "Demo article",
        author: "Mike",
        timesRead: 20
      }} />
    </>
  )
}