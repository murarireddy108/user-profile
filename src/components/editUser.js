import { useState  , useEffect} from 'react';
import { useParams , useHistory } from "react-router-dom";


export default function EditUser (){

  const history = useHistory();
   const {id} = useParams();
   const [user , setUser] = useState({
     name : "",
     email : "",
     phoneNumber:""
    });
    const {name , email , phoneNumber} =user

   useEffect(()=> {
    fetch(`https://61b2f1bfc8d4640017aaf563.mockapi.io/users/${id}`,{method : "GET"})
    .then((data)=> data.json())
    .then((usr)=> setUser(usr));
   }, [id]);
   const onInputChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    fetch(`https://6166c57613aa1d00170a6776.mockapi.io/users/${id}`,
  {
    method : "PUT",
    body : JSON.stringify(user),
    headers: {'Content-Type': 'application/json'},
  }).then(()=> history.push("/"));
} 


  return(
    <div className="conatiner">
    <div className="w-75 mx-auto my-5 shadow p-5">
      <h2 className="mb-4 text-center">Edit User</h2>
      <form onSubmit={event => onSubmit(event)}>
      <div className="input-group flex-nowrap my-3">
      <input type="text" className="form-control" name="name" value={name}
       onChange={event =>onInputChange(event)} placeholder="Username"  
      aria-label="Username" aria-describedby="addon-wrapping" required/>
     </div>
      <div className="input-group flex-nowrap my-3">
      <input type="email" className="form-control" name="email" value={email} 
       onChange={event =>onInputChange(event)} placeholder="Email" 
       aria-label="Email" aria-describedby="addon-wrapping" required/>
     </div>
      <div className="input-group flex-nowrap my-3">
      <input type="text" className="form-control" name= "phoneNumber" value={phoneNumber} 
       onChange={event =>onInputChange(event)} placeholder=" phoneNumber" 
       aria-label=" phoneNumber" aria-describedby="addon-wrapping" required/>
     </div>
     
     <button type="sumbit" className="btn btn-primary w-100">Update User</button>
     <button className="btn btn-outline-info mt-4" onClick={()=> history.push("/")}>Go Back</button>
      </form>
    </div>
  </div>
  )
}

