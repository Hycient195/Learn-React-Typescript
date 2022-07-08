type TUser<T> = {
  name: T,
  hobbies: T[]
}

export default function GenericProps <T extends string | {reg: number}> ({name, hobbies}: TUser<T>){
  return(
    <>
      <h1>Generic Props</h1>

    </>
  )
}