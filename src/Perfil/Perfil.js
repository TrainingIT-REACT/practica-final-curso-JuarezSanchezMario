import React, { Component } from 'react';
// Css
import './Perfil.css';

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Perfil">
        
      </div>
    );
  }
}

export default Perfil;
