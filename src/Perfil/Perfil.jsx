import React, { Component } from "react";
import { getAlbums, getSongs } from "../reducers/historico";
// Css
import "./Perfil.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    return (
      <div className="Perfil">
        <Row>
          <Col>
            <Row>
              <Badge variant="secondary">Albums visitados recientemente</Badge>
              {this.props.historicoAlbums.length ? (
                <ListGroup>
                  {this.props.historicoAlbums.map(item => (
                    <ListGroupItem>{item.name} by {item.artist}</ListGroupItem>
                  ))}
                </ListGroup>
              ) : (
                "Aun no has visitado ninguno"
              )}
            </Row>
          </Col>
          <Col>
            <Badge variant="secondary">
              Canciones escuchadas recientemente
            </Badge>
            {this.props.historicoSong.length ? (
                <ListGroup>
                  {this.props.historicoSong.map(item => (
                    <ListGroupItem>{item.name}</ListGroupItem>
                  ))}
                </ListGroup>
              ) : (
                "Aun no has escuchado ninguna"
              )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({
  user: getUser(state),
  historicoAlbums: getAlbums(state),
  historicoSong: getSongs(state)
}))(Perfil);
