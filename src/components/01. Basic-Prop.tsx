/* Passing Simple Types For Props */

type SaluteProps = {
  name: string
}

export default function Salute(props: SaluteProps){
  return(
    <>
      <h1>Basic Props</h1>

      <p>
        In other to use props while using react with typescript, there
        is need for the specification of the type of the to which the prop
        should be. And this is created by using a type alias, which is assigned
        as the type of the prop to be received, this can be shown below.
      </p>

      <code>
      <pre>
        {`
          type SaluteProps = {
            name: string
          }
          
            return(
              export default function Salute(props: SaluteProps}){
            return(
              <>          
                <h3>Welcome {props.name}! do have a nice day</h3>
              </>
            )
          }
        `}
      </pre>
      </code>
      <h3>Output: Welcome {props.name}! do have a nice day</h3>
    </>
  )
}