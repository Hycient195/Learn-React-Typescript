/*===================================*/
/* Working With String Literal Props */
/*===================================*/

type TLoadingState = {
  loadingState: "loading" | "loaded";
}

export default function StringLiteral(props: TLoadingState){
  return(
    <>
      <h1>Working with string literal Props</h1>
      <p>
        Typescript string literals can also be used as a type alias
        in react in other to spcify distinct options for props. The use of
        string literal in typing props enables a prop to only receive one out
        of a predifined distinct union of string as its value from its parent
        component, thereby throwing an error if any prop value provided is not
        a subset of the already predefined union. Let's see string literal props
        in action in the example below.
      </p>
      <code>
        <pre>
          {`            
            type TLoadingState = {
              loadingState: "loading" | "loaded";
            }
            
            export default function StringLiteral(props: TLoadingState){
              return(
                <>
                  <h3>
                  Your data is
                    {
                      props.loadingState === "loading" ? " loading" : " loaded"
                    }
                  </h3>
                </>
              )
            }
          `}
        </pre>
      </code>
      <p>
        The prop "loading" is passed from the parent component. If any other
        string other than "loading" or "loaded" is passed as a prop to the component,
        an error would be thrown.
      </p>
      <h3>
      Your data is
        {
          props.loadingState === "loading" ? " loading" : " loaded"
        }
      </h3>
    </>
  )
}