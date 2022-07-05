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
      <h3>
        {props.article.name} was written by {props.article.author} and 
        has been read {props.article.timesRead} times since published
      </h3>
    </>
  )
}