
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import About from './About';
import UserSignup from './UserSignup';
import UserSignin from './UserSignin';
import AdminSignin from './AdminSignin';
import AdminSignup from './AdminSignup';
import Pizzas from './Pizzas';
import AdminDashBoard from './AdminDashBoard';
import Header from './Header';
import {useState } from 'react';
import Checkout from './Checkout';


function App() {
  const [usersign, setUserSign] = useState(false);
  const [adminsign, setAdminsign] = useState(false);



  return (
    <>

    <Header setUserSign={setUserSign} usersign={usersign} setAdminsign={setAdminsign} adminsign={adminsign}/>
    <Switch>
      <Route exact path="/"><About /></Route>
      <Route exact path="/users/signup"><UserSignup /></Route> 
      <Route exact path="/users/signin"><UserSignin setUserSign={setUserSign}/></Route> 
      <Route exact path="/admins/signup"><AdminSignup /></Route> 
      <Route exact path="/admins/signin"><AdminSignin setAdminsign={setAdminsign}/></Route>
      <Route exact path="/pizzas"><Pizzas /></Route>
      <Route exact path="/admin-dashboard"><AdminDashBoard setUserSign={setUserSign} setAdminsign={setAdminsign}/></Route>
      <Route exact path="/pizzas/cart-checkout/"><Checkout /></Route>       
    </Switch>
     
    </>
  );
}

export default App;
