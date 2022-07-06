import React from "react";

type TStyles = {
  style: React.CSSProperties;
}

export default function StyleProps(props: TStyles){
  return(
    <>
      <h1>Working With Style Props</h1>
      <p>
        In other to style an element with values obtained from its prop
        It is given a type alias with type "React.CSSProperties". This 
        enables React to to enforce stricness, that any value passed as this 
        style prop must be a valid style rule, otherwise, an error is thrown
      </p>
      <p>Let's see an example below</p>
      <code>
        <pre>
          {`
            import React from "react";

            type TStyles = {
              style: React.CSSProperties;
            }
            
            export default function StyleProps(props: TStyles){
              return(
                <>
                  <div style={props.style} >
                    <h3>Component is styled using props</h3>
                  </div>
                </>
              )
            }
          `}
        </pre>
      </code>
      <div style={props.style} >
        <h3>Output: Component is styled using props</h3>
      </div>
    </>
  )
}