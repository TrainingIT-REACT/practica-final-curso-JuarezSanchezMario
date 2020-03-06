import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlbums } from "../reducers/albums";
import { savedSelectedAlbum } from "../actions/albums";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

// Css
import "./Albums.css";

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="Albums">
        <CardColumns>
          {this.props.albums.map(item => (
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.dispatchSelectedAlbum(item);
                this.props.history.push("/album");
              }}
            >
              <Card.Img variant="top" src={item.cover} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.artist}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSelectedAlbum: album => dispatch(savedSelectedAlbum(album))
});

export default connect(
  state => ({
    albums: getAlbums(state)
  }),
  mapDispatchToProps
)(Albums);
