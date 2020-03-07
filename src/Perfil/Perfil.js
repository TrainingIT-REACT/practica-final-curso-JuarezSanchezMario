import React, { Component } from "react";
import { getAlbums, getSongs } from "../reducers/historico";
// Css
import "./Perfil.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../reducers/user";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (!this.props.user.logged) {
      return (
        <Redirect to={{ pathname: "/session", state: { from: "perfil" } }} />
      );
    }
    return <div className="Perfil">Hola</div>;
  }
}

export default connect(state => ({
  user: getUser(state),
  historicoAlbums: getAlbums(state),
  historicoSong: getSongs(state)
}))(Perfil);
