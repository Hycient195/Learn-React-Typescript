type TArticle = {
  article: {
    name: string,
    author: string
    timesRead: number
  }
}

export default function ObjProps(props: TArticle){
  return(
    <>
      <h1>Object Props</h1>
      <p>
        Moving a step further, whole objects can also be passed down 
        to child components through props. In the case the type alias
        of the prop is defined to be an object, whose parameters are
        specified with their individual types. This can be seen as shown 
        below
      </p>
      <code>
        <pre>
          {`
            type TArticle = {
              article: {
                name: string,
                author: string
                timesRead: number
              }
            }
            
            export default function ObjProps(props: TArticle){
              return(
                <>
                  <h3>
                    {props.article.name} was written by {props.article.author} and 
                    has been read {props.article.timesRead} times since published
                  </h3>
                </>
              )
            }
          `}
        </pre>
      </code>
      <p>
        The props in the example above are <br /> article.name = Man and his environment,
        article.author = Amadi Emeadi and article.timesRead = 30 respectively.
      </p>
      <h3>
        Output: {props.article.name} was written by {props.article.author} and 
        has been read {props.article.timesRead} times since published
      </h3>
    </>
  )
}