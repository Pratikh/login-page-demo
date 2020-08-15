import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Button, Container, Form, Jumbotron,
} from 'react-bootstrap';

let HOST = 'http://localhost:8085';
if(process.env.APP_NODE_ENV === 'production'){ // If its deployed then serve static HTML pages.
  HOST = window.location.origin;
}
const _ = require('lodash');

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    _.bindAll(this, 'onSubmitButtonClick');
    console.log('LoginPage Props');
    this.usenameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      userData: null,
    };
    window.display = this;
  }

  async onSubmitButtonClick(e) {
    e.preventDefault();
    console.log('Button on clicked HERE', this.userName, this.userPassword);
    const userData = JSON.stringify({
      username: this.userName,
      password: this.userPassword,
    });
    const isUser = await fetch(`${HOST}/isUserValid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    }).then((res) => res.text());
    console.log(isUser);
  }

  get userName() {
    return this.usenameInput.current.value;
  }

  get userPassword() {
    return this.passwordInput.current.value;
  }


  render() {
    return (
      <Container className="col-sm-5 center-align-div">
        <Jumbotron className="mb-0" fluid="true">
          <Container>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" ref={this.usenameInput} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={this.passwordInput} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.onSubmitButtonClick}>Login</Button>
            </Form>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
