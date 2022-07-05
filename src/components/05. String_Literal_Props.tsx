/*===================================*/
/* Working With String Literal Props */
/*===================================*/

type TLoadingState = {
  loadingState: "loading" | "loaded";
}

export default function StringLiteral(props: TLoadingState){
  return(
    <>
      <h1>Working with string literals</h1>
      <h3>
      Your data is
        {
          props.loadingState === "loading" ? " loading" : " loaded"
        }
      </h3>
    </>
  )
}