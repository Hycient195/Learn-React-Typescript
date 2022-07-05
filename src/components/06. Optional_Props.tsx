type TArticle = {
  name: string,
  author?: string,
  timesRead: number
}

export default function OptionalProps (props: TArticle){
  return(
    <>
      <h3>Check out the article</h3>
      <h3>{props.name} {props.author ? `was written by ${props.author}`: null} with {props.timesRead} copies </h3>
    </>
  )
}