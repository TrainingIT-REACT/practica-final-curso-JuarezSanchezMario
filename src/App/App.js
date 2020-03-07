import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albums";
/*Componentes*/
import Album from "../Albums/Album";
import Albums from "../Albums/Albums";
import Home from "../Home/Home";
import Perfil from "../Perfil/Perfil";
import Session from "../Session/Session";
/***/
import { getUser } from "../reducers/user";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

// Css
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.displayFetchAlbums();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className="AppContainer">
            <div className="vistaMenu">
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/")}
                  >
                    Spotiphy
                  </Navbar.Brand>
                  <Nav>
                    <Nav.Link
                      style={{ "padding-right": "50px" }}
                      onClick={() => history.push("/")}
                    >
                      Inicio
                    </Nav.Link>
                    <Nav.Link
                      style={{ "padding-right": "50px" }}
                      onClick={() => history.push("/albums")}
                    >
                      Albums
                    </Nav.Link>
                    <Nav.Link
                      style={{ "padding-right": "50px" }}
                      onClick={() => history.push("/perfil")}
                    >
                      Perfil
                    </Nav.Link>
                  </Nav>
                  <ButtonToolbar>
                    <Button
                      variant={this.props.user.logged ? "info" : "outline-info"}
                      onClick={() => {
                        if (this.props.user.logged) {
                          history.push("/perfil");
                        } else {
                          history.push("/session");
                        }
                      }}
                    >
                      {this.props.user.logged
                        ? "Cerrar Sesión"
                        : "Inicio Sesión"}
                    </Button>
                  </ButtonToolbar>
                </Container>
              </Navbar>
              <div className="vistaCentro">
                <Route path="/" exact component={Home} />
                <Route path="/session" component={Session} />
                <Route path="/albums" component={Albums} />
                <Route path="/album" component={Album} />
                <Route path="/perfil" component={Perfil} />
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  displayFetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(
  state => ({
    user: getUser(state)
  }),
  mapDispatchToProps
)(App);
