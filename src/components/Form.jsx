import { useState } from "react"
import validation from "./validation/validation"


const Form = ({login}) => {
     
    const [errors,setErrors] = useState({})

    const [userData,setUserData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
       setUserData({
        ...userData,
        [event.target.name]: event.target.value
        
       }) 
       setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value

       }))

    }
 
    const handlesubmit = (event) =>{
        Event.preventDefault()
        login(userData)
    }
    return (
       <form onSubmit={handlesubmit}>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={userData.emailemail} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <hr />

        <label htmlFor="password">password</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange}/>
        {errors.email && <p>{errors.password}</p>}
        <button>submit</button>
       </form>
    )
}

export default Form