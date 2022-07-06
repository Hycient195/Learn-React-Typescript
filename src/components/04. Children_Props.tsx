type TChildrenProps = {
  children: React.ReactNode;
}

export default function ChildrenProps(props: TChildrenProps){
  return(
    <div>
      <h1>Working With Element Children Props</h1>
      <p>
        Now we've seen how different kind of props of primitive types can
        be passed down as props to a child component, of which this also holds
        good for passing any of the primite types as a "child" to a component.
        For this particular example however we would take a look at how children
        props which are elements can be typed in react.
      </p>
      <p>ReactNode
        For the purpose of typing children props that element, we make use of
        the React custom types which have already been defined for us in the 
        react type library. For this case, every element is of type "React.ReactNode".
        {/* For more specificity, the Exact type of the element can be passed as a generic
        argument to the "ReactNode" as in ("React.ReactNode{`<HTMLButtonElement>`}") */}
        
      </p>
      <p>Let's see what this looks like in the example below</p>
      <code>
        <pre>
          {`
            type TChildrenProps = {
              children: React.ReactNode;
            }
            
            /*
              The Type "React.ReactNode" entails that any content passed in-between
              the opening and cloading tags of the componet must be a JSX element
              itself.
            */ 
            
            
            export default function ChildrenProps(props: TChildrenProps){
              return(
                <div>
                  <h1>Working With Element Children Props</h1>
                  { props.children }
                </div>
              )
            }

            /*
              The Type "React.ReactNode" entails that any content passed in-between
              the opening and cloading tags of the componet must be a JSX element
              itself.
            */ 
          `}
        </pre>
      </code>
      { props.children }
    </div>
  )
}