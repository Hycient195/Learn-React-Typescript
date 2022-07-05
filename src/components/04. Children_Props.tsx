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
      <p>
        Now we've seen how different kind of props of primitive types can
        be passed down as props to a child component, of which this also holds
        good for passing any of the primite types as a "child" to a component.
        For this particular example however we would take a look at how 
      </p>
      <h1>Working With Element Children Props</h1>
      { props.children }
    </div>
  )
}