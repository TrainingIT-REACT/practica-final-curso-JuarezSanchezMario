import React, { Component } from 'react';
// Css
import './Reproductor.css';

class Reproductor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="Reproductor">
        hola Reproductor
      </div>
    );
  }
}

export default Reproductor;
