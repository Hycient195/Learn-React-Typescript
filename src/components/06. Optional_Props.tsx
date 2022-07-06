type TArticle = {
  name: string,
  author?: string,
  timesRead: number
}

export default function OptionalProps (props: TArticle){
  return(
    <>
      <p>
        By default, any property specified in the type alias passed as a type 
        to a prop must be must be provided or passed from its parent component,
        when it is used.
      </p>
      <p>
        An optional prop enables us to override this default behaviour, by making
        it possible for some props to either be passed, or not be passed 
        (optionally provided) when achild component is used in its parent component
      </p>
      <p>
        A prop can be marked optional by appending a "?" after its name
        when specifien in a type alias. Let's see what this looks like in 
        the example below.
      </p>
      <code>
        <pre>
          {`
            type TArticle = {
              name: string,
              author?: string,
              timesRead: number
            }

            export default function OptionalProps (props: TArticle){
              return(
                <>
                  <h3>
                    {props.name} {props.author ? "was written by " + props.author}: null} 
                    with {props.timesRead} copies 
                  </h3>
                </>
              )
            }
          `}
        </pre>
      </code>
      <p>
        For the example above the "author" property may or may not be passed
        to the child component when it is called or used by its parent component,
        and no error would be thrown in execution as seen below.
      </p>
      <code>
        <pre>
          {`
            // In parent component
            <OptionalProps name='An African Night Entertainment' timesRead={300} />

            // The component whoose type alias is defined above is called <OptionalProps/>
          `}
        </pre>
      </code>
      <h3>Output: {props.name} {props.author ? `was written by ${props.author}`: null} with {props.timesRead} copies </h3>
      </>
  )
}