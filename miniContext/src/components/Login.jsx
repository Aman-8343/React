import React,{useState,useContext} from 'react'
import Usercontext from '../Context/userContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

const handleSubmit =()=>{

}

  return (
    <div>
<h2>Login</h2>
<input type='text'
value={username}
onChange={(e)=>setusername(e.target.value)}
placeholder='username' />
<input type='password'
value={password}
onChange={(e)=>setpassword(e.target.value)}
 placeholder='Password' />
<button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login