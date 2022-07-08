export type TArticle = {
  article:{
    name: string,
    author: string,
    timesRead: number
  }
}

export default function DestructuringProps({ article }: TArticle){
  return(
    <div>
      <h1>Destructuring Props</h1>
      <p>
        Types can also be assigned to destructured props, saving the stress
        of repeating the "props" keywork everywhere, whilst maintaining the 
        typing on the props. 
      </p>
      <p>
        This is the approach used in large codebases, and is easily the most
        used pattern of writing React with typescript.
      </p>
      <p>
        Below is an example of using types with destructured props
      </p>
      <code>
        <pre>
          {
            `
            type TArticle = {
              article:{
                name: string,
                author: string,
                timesRead: number
              }
            }
            
            export default function DestructuringProps({ article }: TArticle){
              return(
                <div>
                  <h3>
                    Article {article.name} with author {article.author} has been read {article.timesRead} times.
                  </h3>
                </div>
              )
            }
            `
          }
        </pre>
      </code>
      <p>
        article.name, article.author and article.timesRead passed down from
        parent component
      </p>
      <h3>
        Output: Article {article.name} with author {article.author} has been read {article.timesRead} times.
      </h3>
    </div>
  )
}