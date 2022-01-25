import { useState } from "react";
import { useHistory } from "react-router-dom";

  const AddUser = () =>{
    const history = useHistory();
    const [user , setUser] = useState({
      name : "",
      email : "",
      phoneNumber:""
    });
    // const {name , email , phoneNumber} =user
    const onInputChange = event => {
      // console.log(event.target.value);
      setUser({...user, [event.target.name]: event.target.value})
    }
    const onSubmit = (event) =>{
      event.preventDefault();
      console.log(JSON.stringify(user));
      fetch(`https://6166c57613aa1d00170a6776.mockapi.io/users`,
    {
      method : "POST",
      body : JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
    }).then(()=> history.push("/"));
  }

  return(
   <div className="conatiner">
    <div className="w-75 mx-auto my-5 shadow p-5">
       <h2 className="mb-4 text-center">Add User</h2>
       <form onSubmit={event => onSubmit(event)}>
       <div className="input-group flex-nowrap my-3">
       <input type="text" className="form-control" name="name" 
        onChange={event =>onInputChange(event)} placeholder="Username"  
       aria-label="Username" aria-describedby="addon-wrapping" required/>
      </div>
       <div className="input-group flex-nowrap my-3">
       <input type="email" className="form-control" name="email" 
        onChange={event =>onInputChange(event)} placeholder="Email" 
        aria-label="Email" aria-describedby="addon-wrapping" required/>
      </div>
       <div className="input-group flex-nowrap my-3">
       <input type="number" className="form-control" name= "phoneNumber"  
        onChange={event =>onInputChange(event)} placeholder=" phoneNumber" 
        aria-label=" PhoneNumber" aria-describedby="addon-wrapping" required/>
      </div>
      
      <button type="sumbit" className="btn btn-primary w-100">Add User</button>
      
      <button className="btn btn-outline-info mt-4" onClick={()=> history.push("/")}>Go Back</button>
       </form>
     </div>
   </div>
  )
}

export default AddUser;