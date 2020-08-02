import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navigator from './Navigator';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Welcome to React Navigation</h1>
      <BrowserRouter>
        <div>
          <Navigator />
            {/* <Link to={'/'}>Home</Link>{' '}
            <Link to={'/contact'}>Contact</Link>{' '}
            <Link to={'/about'}>About</Link>{' '} */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route render={() => <h1>Sorry! Page not found.</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
