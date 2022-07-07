import { Component } from "react";

type TInputProp = {
  input: string
}

type TInputState = {
  count: number
}

export class TypingClassComponent extends Component<TInputProp, TInputState> {
  public state = {
    count: 0
  }

  increament = () =>{
    this.setState((prevState) => ({ count: prevState.count + 1} ))
  }

  decreament = () =>{
    this.setState((prevState) => ({ count: prevState.count - 1} ))
  }
  

  render(){
    return(
      <>
        <h1>Typing Class Components</h1>
        <p>
          The basics of typing a class component starts from typing its 
          props, and its state. To type the props and state of a class component 
          a type alias is provided as a generic argument to to the React's "Component"
          class, where the first generic argument is the prop type, and the second generic argument
          is the state type. 
        </p>
        <p>
          The type aliases assigned to these would then correspond to the type 
          of the values passed as props, and managed as state in the component.
          respectively.
        </p>
        <p>
          Let's see this in the example below.
        </p>
        <code>
          <pre>
            {
              `
              import { Component } from "react";

              type TInputProp = {
                input: string
              }

              type TInputState = {
                count: number
              }

              export class TypingClassComponent extends Component<TInputProp, TInputState> {
                public state = {
                  count: 0
                }

                increament = () =>{
                  this.setState((prevState) => ({ count: prevState.count + 1} ))
                }
              
                decreament = () =>{
                  this.setState((prevState) => ({ count: prevState.count - 1} ))
                }
                

                render(){
                  return(
                    <>
                      <h3>{this.props.input} is passed as props </h3>
                      <h3>Count state is {this.state.count} </h3>
                    </>
                  )
                }
              }
              `
            }
          </pre>
        </code>
        <p>
          Optionally, the type can also be passed directly to the generic
          argument to React's "Component" class. If no prop is to be passed,
          empty braces "{`{}`}" can be passed in the stead of props, and the 
          state generic type may be removed is no state is to be maintained in the
          component.
        </p>
        <p>
          Example
        </p>

        <code>
          <pre>
            {
              `
              export class TypingClassComponent extends Component<{}>
              `
            }
          </pre>
        </code>

        <h3>{this.props.input} is passed as props </h3>
        <h3>Count state is {this.state.count} </h3>

        <button onClick={this.decreament} >Decreament Count</button>
        <button onClick={this.increament} >Increament Count</button>
      </>
    )
  }
}