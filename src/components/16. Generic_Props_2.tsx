type TUser<T> = {
  user: {
    reg: number,
    firstName: string,
    lastName: string,
    isAvaliable: boolean
  }
}

export default function GenericProps2 <T extends  {reg: string} >({user}: TUser<T>){
  return (
    <>
      <h3>Reg - {user.reg} </h3>
      <h3>First name - {user.firstName} </h3>
      <h3>Last name - {user.lastName} </h3>
      <h3>Avaliability - {user.isAvaliable ? "avaliable": "not avaliable"}</h3>
    </>
  )
}