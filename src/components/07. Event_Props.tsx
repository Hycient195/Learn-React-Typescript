import React from "react";

type TEventProps = {
  inputValue: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export default function EventProps(props: TEventProps){

  return(
    <>
      <h1>Working with Event Props</h1>
      <p>
        An event props is simply 
      </p>
      <form action="">
        <input type="text" value={props.inputValue} onChange={props.handleChange} />
        <button onClick={props.handleSubmit} type="submit">Submit</button>
      </form>
    </>
  )
}