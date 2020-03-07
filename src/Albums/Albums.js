import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlbums, getLoading } from "../reducers/albums";
import {
  savedSelectedAlbum,
  fetchFilteredByName,
  fetchFilteredByArtist
} from "../actions/albums";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "../utils/spinner.jsx";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Css
import "./Albums.css";

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastSearch: "",
      artista:false,
      nombre:true,
    };
  }

  componentDidMount() {}

  handleSubmit(event, props) {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.formHorizontalRadios2.checked) {
      props.fetchByArits(form.search.value);
    } else {
      props.fetchByName(form.search.value);
    }
    this.setState({ lastSearch: form.search.value });
    console.log(event);
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className="Albums">
        <Form onSubmit={event => this.handleSubmit(event, this.props)}>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Buscar"
              defaultValue={this.state.lastSearch}
            />
          </Form.Group>
          <Button variant="primary" type={"submit"}>
            Buscar
          </Button>
          <Form.Group>
            <Form.Check
              onClick={() => this.setState({nombre: true,artista:false})}
              type="radio"
              custom
              checked={this.state.nombre}
              label="Por nombre"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              custom
              onClick={() => this.setState({artista: true,nombre:false})}
              checked={this.state.artista}
              label="Por artista"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Form.Group>
        </Form>
        <Badge variant="secondary">Albums</Badge>
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
  dispatchSelectedAlbum: album => dispatch(savedSelectedAlbum(album)),
  fetchByName: string => dispatch(fetchFilteredByName(string)),
  fetchByArits: string => dispatch(fetchFilteredByArtist(string))
});

export default connect(
  state => ({
    albums: getAlbums(state),
    loading: getLoading(state)
  }),
  mapDispatchToProps
)(Albums);
