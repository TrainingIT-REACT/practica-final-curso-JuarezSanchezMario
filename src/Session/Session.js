import React, { Component } from "react";
import { connect } from "react-redux";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { updateUser } from "../actions/user";
import { Redirect } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
// Css
import "./Session.css";
import { getUser } from "../reducers/user";

class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toastVisibility: true,
    };
  }

  componentDidMount() {}

  handleSubmit(event, props) {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    props.dispatchUser(form.name.value, form.email.value);
  }

  render() {
    return (
      <div className="Session">
        <Badge variant="secondary">Inicio sesión</Badge>
        <Form onSubmit={event => this.handleSubmit(event, this.props)}>
          <Form.Group controlId="name">
            <Form.Control required type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control required type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Control required type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button variant="primary" type={"submit"}>
            LOG IN
          </Button>
        </Form>
        {this.props.user.logged ? (
          <Redirect to={{ pathname: "/perfil", state: { from: "inicio" } }} />
        ) : null}
        {this.props.location.state &&
        this.props.location.state.from &&
        this.props.location.state.from === "perfil" ? (
          <Toast
          show={this.state.toastVisibility}
          onClose={() => this.setState({toastVisibility: false})}
            style={{
              position: "absolute",
              top: 70,
              right: 70
            }}
          >
            <Toast.Header>
              <img
                src="./spotiphya.png"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Spotiphy</strong>
            </Toast.Header>
            <Toast.Body>
              Inicia sesión para disfrutar al completo de la experiencia
              Spotiphy!
            </Toast.Body>
          </Toast>
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  dispatchUser: user => dispatch(updateUser(user))
});
export default connect(
  state => ({ user: getUser(state) }),
  mapDispatchToProps
)(Session);
