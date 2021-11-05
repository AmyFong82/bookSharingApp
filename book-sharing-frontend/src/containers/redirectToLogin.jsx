import { Redirect } from 'react-router-dom'

export function redirectToLogin(){
  return <Redirect to={{
                        pathname: "/login",
                        state: { message: "Please login to get access." }
                      }}
         />
}
              