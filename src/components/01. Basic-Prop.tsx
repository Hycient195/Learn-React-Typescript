/* Passing Simple Types For Props */

type SaluteProps = {
  name: string
}

export default function Salute(props: SaluteProps){
  return(
    <>
      <h1>Basic Props</h1>
      <h3>Welcome {props.name}! do have a nice day</h3>
    </>
  )
}