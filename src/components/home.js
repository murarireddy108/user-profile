
import { useState  , useEffect} from 'react';
import { Link } from "react-router-dom";

export default function Home(){

  const getUser= ()=> {
    fetch(`https://6166c57613aa1d00170a6776.mockapi.io/users`)
    .then((data)=> data.json())
    .then((usr)=> setUser(usr))
  }
    useEffect(getUser, []);
    
   const deleteUser = (id)=> {
     fetch(`https://6166c57613aa1d00170a6776.mockapi.io/users/${id}`,{method : "DELETE"})
    .then(()=> getUser());
   }

    const [users , setUser] = useState([]);

  return(
    <div className='home-page'>
    <h1 className='m-4'>User DashBoard</h1>
    <table className="table table-striped table-hover shadow">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Nummber</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user , index)=> (
     <tr key={index}>
     <th scope="row">{index + 1}</th>
     <td>{user.name}</td>
     <td>{user.email}</td>
     <td>{user.phoneNumber}</td>
     <td>
       <Link to={`/users/${user.id}`} className="btn btn-primary ms-3"><i className="fas fa-user-circle me-2"></i> 
        View User</Link>
       <Link to={`/users/edit/${user.id}`} className="btn btn-outline-warning ms-3"><i className="far fa-edit"></i> Edit</Link>
       <Link to={'/'} onClick={()=> deleteUser(user.id)} className="btn btn-outline-danger ms-3">
         <i className="far fa-trash-alt"></i> Delete</Link>
     </td>
   </tr>
    ))} 
  </tbody>
</table>
    </div>
  )
}