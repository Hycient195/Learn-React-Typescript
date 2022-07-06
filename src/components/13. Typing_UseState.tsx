import { useState } from "react"
import { TArticle } from "../types";

export default function TypingUseState(){
  const [ article, setArticle ] = useState<TArticle | null>(null);

  const handleSetArticle = () =>{
    setArticle({
      name: "The mind of a procastinator",
      author: "Hycient",
      timesRead: 37
    })
  }
  return(
    <>
      <h1>Typing the UseState() Hook</h1>
      <p>
        In most case scenarios, typing of state variables are not carried 
        out, because type typescript's type inference automatically does that 
        for us. However, it is good practice to type state variables so a to
        make ones program more descriptive and self-explnatory.
      </p>
      <p>
        A state variable can be typed by passing the type of the value it is 
        supposed to hold as a generic argument in angle brackets, and as such,
        only values with that type can be used to update the state.
      </p>
      <code>
        <pre>
          {
            `
            import { useState } from "react"
            import { TArticle } from "../types";

            export default function TypingUseState(){
              const [ article, setArticle ] = useState<TArticle | null>(null);

              const handleSetArticle = () =>{
                setArticle({
                  name: "The mind of a procastinator",
                  author: "Hycient",
                  timesRead: 37
                })
              }
              return(
                <>
                  <h2>Article</h2>
                  <h3>Name - {article?.name}, author {article?.author}, timesRead {article?.timesRead}, </h3>
                  <button onClick={handleSetArticle} >Set article content</button>
                </>
              )
            }
            `
          }
        </pre>
      </code>
      <p>
        In the example above, the "null" value is also optionally provided in 
        other to accomodate the initial null state. Because of the alternate 
        type of "null" assigned to the state however, optional chaining must be
        used when accessing the state values within the output JSX using the 
        question mark operator (eg. article?.name), since the value could optionally
        be null, else an error would be thrown.
      </p>
      <p>
        The approach above is most valid, when the initial state type is different
        from the future value type.
      </p>
      <h2>Article</h2>
      <h3>Name - {article?.name}, author {article?.author}, timesRead {article?.timesRead}, </h3>
      <button onClick={handleSetArticle} >Set article content</button>
    </>
  )
}