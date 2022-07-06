import { TUsers } from '../types'

type TNetwork = {
  networkName: string,
  connectedUsersCount: number,
  connectedUsers: TUsers
}

export default function TypeComposition({ networkName, connectedUsersCount, connectedUsers}: TNetwork){
  return(
    <>
      <h1>Type Composition</h1>
      <p>
        Just as types can be composed of other types in typescript, so 
        type composition can also be used in other to create a type alias
        from another type.
      </p>
      <p>
        Let's see an example as shown below.
      </p>
      <code>
        <pre>
          {
            `
            import { TUsers } from '../types'

            type TNetwork = {
              networkName: string,
              connectedUsersCount: number,
              connectedUsers: TUsers
            }
            
            export default function TypeComposition({ networkName, connectedUsersCount, connectedUsers}: TNetwork){
              return(
                <>            
                  <div>
                    <h3>
                      Network Name {networkName} <br /> 
                      Number of Connected Users {connectedUsersCount} <br />
                      Network Users - 
                      {
                        connectedUsers.map(user =>(
                          <h4>
                            Name - {user.name} <br />
                            Age - {user.age} <br />
                            Is Active - {String(user.isActive)}
                          </h4>
                        ))
                      }
                    </h3>
                  </div>
                </>
              )
            }
            `
          }
        </pre>
      </code>
      <p>
        In the example above, the type "TNetwork" typed on the prop received by the component
        has a property "connectedUsers" whoose type is an already defined type 
        alias, and as such, it can be said that the type "TNetwork" has
        the type "TUser" as one of its compositions.
      </p>

      <div>
        <h2>Output:</h2>
        <h3>
          Network Name {networkName} <br /> 
          Number of Connected Users {connectedUsersCount} <br />
          Network Users - 
          <ul>  
            {
              connectedUsers.map(user =>(
                <li>
                  Name - {user.name} <br />
                  Age - {user.age} <br />
                  Is Active - {String(user.isActive)}
                  <br /><br />
                </li>
              ))
            }
          </ul>   
        </h3>
      </div>
    </>
  )
}