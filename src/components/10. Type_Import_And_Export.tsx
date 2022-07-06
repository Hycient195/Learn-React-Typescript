import React from "react";
import { TUser } from "../types";

export default function ShowImportedUser({user}: TUser){
  return(
    <div>
      <h1>Type Imports And Exports</h1>
      <ul>
        {
          user.map(user =>(
            <li>name {user.name} | age {user.age} | isActive {String(user.isActive)} </li>
          ))
        }
      </ul>
    </div>
  )
}