import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "../Home/Home";
import Albums from "../Albums/Albums";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albums";
import Album from "../Albums/Album";
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
      loading: true,
      albums: []
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
                      onClick={() => history.push("/album")}
                    >
                      Perfil
                    </Nav.Link>
                  </Nav>
                  <ButtonToolbar>
                    <Button variant="outline-info" to="/pefil">
                      Inicio Sesión
                    </Button>
                  </ButtonToolbar>
                </Container>
              </Navbar>
              <div className="vistaCentro">
                <Route path="/" exact component={Home} />
                <Route path="/session" component={Home} />
                <Route path="/albums" component={Albums} />
                <Route path="/album" component={Album} />
                <Route path="/pefil" component={Albums} />
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  displayFetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
