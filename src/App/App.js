import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Reproductor from "../Reproductor/Reproductor";

// Css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="AppContainer">
            <div className="vistaMenu">
              <nav>
                <ul>
                  <li><NavLink exact activeClassName="active" to="/">Inicio</NavLink></li>
                  <li><NavLink activeClassName="active" to="/session">Inicio Sesión</NavLink></li>
                  <li><NavLink activeClassName="active" to="/session">Albums</NavLink></li>
                  <li><NavLink activeClassName="active" to="/session">Perfil</NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="vistaCentro">
              <Route path="/" exact component={Home} />
              <Route path="/sessio" component={Home} />
              <Route path="/albums" component={Home} />
              <Route path="/pefil" component={Home} />
            </div>
            <div className="vistaReproductor">
              <Reproductor />
            </div>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
