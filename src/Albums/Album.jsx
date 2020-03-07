import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs, getLoading } from "../reducers/songs";
import { fetchByAlbum, saveSongHistorico } from "../actions/songs";
import { getSelectedAlbum } from "../reducers/albums";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../utils/spinner.jsx";

// Css
import "./Albums.css";

class Album extends Component {
  constructor(props) {
    super(props);
    this.duration = 0;
    this.state = {
      selectedSong: {
        source: {},
        id: {},
        last: false
      },
    };
  }

  componentDidMount() {
    this.props.fetchSongs(this.props.selectedAlbum.id);
  }

  render() {
    if(this.props.loading){
      return <Spinner/>
    }
    const ponerCancion = item => {
      this.setState(
        {
          selectedSong: {
            source: ""
          }
        },
        () =>
          this.setState({
            selectedSong: {
              source: item.audio,
              id: item.id,
              last:
                item.id === this.props.songs[this.props.songs.length - 1].id
                  ? true
                  : false
            }
          })
      );
      this.props.saveSong(item);
    };
    if(!Object.keys(this.props.selectedAlbum).length){
      return("Ups no hay nada que mostrar");
    }
    return (
      <div className="Albums">
        <Container style={{ maxWidth: "100%", textAalign: "-webkit-center" }}>
          <Row>
            <Col lg="true">
              <Card style={{ width: "18rem" }}>
                <Card.Img alt="No image" variant="top" src={this.props.selectedAlbum.cover} />
                <Card.Body>
                  <Card.Title>{this.props.selectedAlbum.name}</Card.Title>
                  <Card.Text>{this.props.selectedAlbum.artist}</Card.Text>
                  <Card.Text>
                    {this.duration === 0
                      ? this.props.songs.forEach(
                          item => (this.duration += item.seconds)
                        )
                      : null}
                    {new Date(this.duration * 1000).toISOString().substr(14, 5)}
                    {" m"}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Row>
                <AudioPlayer
                  className="player"
                  autoPlay={this.state.selectedSong.source.length}
                  src={
                    this.state.selectedSong.source.length &&
                    this.state.selectedSong.source
                  }
                  onPlay={e => console.log("e2e2")}
                  onCanPlay={e => console.log(e)}
                  onEnded={e => {
                    if (!this.state.selectedSong.last) {
                      const song = this.props.songs.find(
                        item => item.id === this.state.selectedSong.id + 1
                      );
                      ponerCancion(song);
                    }
                  }}
                />
              </Row>
            </Col>
            <Col lg="true">
              <Row style={{ marginLeft: "10%" }}>Pulsa para reproducir!</Row>
              <Row style={{ marginLeft: "10%" }}>
                <Card style={{ width: "18rem" }}>
                  <ListGroup className="list-group-flush">
                    {this.props.songs.map(item => (
                      <ListGroupItem
                        onClick={() => ponerCancion(item)}
                        style={{
                          cursor: "pointer",
                          background:
                            item.id === this.state.selectedSong.id
                              ? "aliceblue"
                              : "none"
                        }}
                      >
                        {
                          <Row>
                            <Col>{item.name}</Col>
                            <Col>
                              {new Date(item.seconds * 1000)
                                .toISOString()
                                .substr(14, 5)}
                              {" m"}
                            </Col>
                          </Row>
                        }
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSongs: id => dispatch(fetchByAlbum(id)),
  saveSong: song => dispatch(saveSongHistorico(song))
});

export default connect(
  state => ({
    songs: getSongs(state),
    selectedAlbum: getSelectedAlbum(state),
    loading: getLoading(state)
  }),
  mapDispatchToProps
)(Album);
