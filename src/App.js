
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/about"><About /></Route>   
    </Switch>
     
    </>
  );
}

export default App;
