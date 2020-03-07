import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecomendados,getLoading } from "../reducers/albums";
import { savedSelectedAlbum } from "../actions/albums";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "../utils/spinner.jsx";
import Badge from 'react-bootstrap/Badge'
// Css
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    
  }

  render() {
    if(this.props.loading){
      return <Spinner/>
    }
    return (
      <div>
        <Badge variant="secondary">Recomendaciones</Badge>
        <CardColumns>
          {this.props.recomendados.map(item => (
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
    recomendados: getRecomendados(state),
    loading: getLoading(state),
  }),
  mapDispatchToProps
)(Home);
