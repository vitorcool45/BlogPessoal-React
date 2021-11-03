import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';

function App() {
  return (
    <div>
     <Router>
       <NavBar />
          <Switch>
            <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
                <Login />
              </Route>

            <Route path='/login'>
                <Login />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

              <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            </div>
          </Switch>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
