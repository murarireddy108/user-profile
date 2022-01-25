
import './App.css';
import { BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Home from './components/home.js' 
import About from './components/about.js'
import Navbar from './components/navbar.js'
import AddUser from './components/addUser';
import EditUser from './components/editUser.js';
import User from './components/user.js';



export default function App() {
  return (
    <Router>
    <div className="app">
       <Navbar/>
       <Switch>
         <Route exact path="/">
             <Home/>
           </Route>
         <Route exact path="/about">
             <About/>
           </Route>
         <Route exact path="/users/add">
             <AddUser/>
           </Route>
         <Route exact path="/users/edit/:id">
             <EditUser/>
           </Route>
         <Route exact path="/users/:id">
             <User/>
           </Route>
         </Switch>
     </div>
    </Router>
  );
}







