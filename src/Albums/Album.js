import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../reducers/albums';
import { fetchAlbums } from '../actions/albums';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

// Css
import './Albums.css';

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  componentDidMount() {
    this.props.displayFetchAlbums();
  }

  render() {
    return (
      <div className="Albums">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {this.props.albums
              .map(item => <ListGroupItem>{item.name}</ListGroupItem>)}
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <CardColumns>
          {this.props.albums
            .map(item => <Card style={{ "cursor": "pointer" }} onClick={() => console.log(item.name)}>
              <Card.Img variant="top" src={item.cover} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.artist}
                </Card.Text>
              </Card.Body>
            </Card>)}
        </CardColumns>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  displayFetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(
  (state) => (
    {
      songs: getSongs(state),
      selectedAlbum: getSelectedAlbum(state),
    }
  ),
  mapDispatchToProps,
)(Albums);
