import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albums";
import { deleteUser } from "../actions/user";
import { getUser } from "../reducers/user";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "./App.css";

const Home = React.lazy(() => import("../Home/Home.jsx"));
const Album = React.lazy(() => import("../Albums/Album.jsx"));
const Albums = React.lazy(() => import("../Albums/Albums.jsx"));
const Perfil = React.lazy(() => import("../Perfil/Perfil.jsx"));
const Session = React.lazy(() => import("../Session/Session.jsx"));

// Css

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.displayFetchAlbums();
  }

  render() {
    return (
      <div className="App">
        <React.Suspense fallback="loading...">
          <Router history={history}>
            <div className="AppContainer">
              <div className="vistaMenu">
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand
                      style={{ cursor: "pointer", color: "#ffefefd1" }}
                      onClick={() => history.push("/")}
                    >
                      Spotiphy
                    </Navbar.Brand>
                    <Nav>
                      <Nav.Link
                        style={{ paddingRight: "50px", color: "#ffefefd1" }}
                        onClick={() => history.push("/")}
                      >
                        Inicio
                      </Nav.Link>
                      <Nav.Link
                        style={{ paddingRight: "50px", color: "#ffefefd1" }}
                        onClick={() => history.push("/albums")}
                      >
                        Albums
                      </Nav.Link>
                      <Nav.Link
                        style={{ paddingRight: "50px", color: "#ffefefd1" }}
                        onClick={() => history.push("/perfil")}
                      >
                        Perfil
                      </Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                      <Button
                        variant={
                          this.props.user.logged ? "info" : "outline-info"
                        }
                        onClick={() => {
                          if (this.props.user.logged) {
                            this.props.deleteUser();
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
                  {this.props.user.logged ? (
                    <Badge
                      style={{ cursor: "pointer" }}
                      pill
                      variant="primary"
                      onClick={() => history.push("/perfil")}
                    >
                      {this.props.user.name} {this.props.user.email}
                    </Badge>
                  ) : null}
                </Navbar>
                <div className="vistaCentro">
                  <React.Suspense fallback="loading Home...">
                    <Route path="/" exact component={Home} />
                  </React.Suspense>
                  <React.Suspense fallback="loading Session...">
                    <Route path="/session" component={Session} />
                  </React.Suspense>
                  <React.Suspense fallback="loading Albums...">
                    <Route path="/albums" component={Albums} />
                  </React.Suspense>
                  <React.Suspense fallback="loading Album...">
                    <Route path="/album" component={Album} />
                  </React.Suspense>
                  <React.Suspense fallback="loading Perfil...">
                    <Route path="/perfil" component={Perfil} />
                  </React.Suspense>
                </div>
              </div>
            </div>
          </Router>
        </React.Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  displayFetchAlbums: () => dispatch(fetchAlbums()),
  deleteUser: () => dispatch(deleteUser())
});

export default connect(
  state => ({
    user: getUser(state)
  }),
  mapDispatchToProps
)(App);
