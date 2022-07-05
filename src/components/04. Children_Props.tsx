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