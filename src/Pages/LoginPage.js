import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Button, Container, Form, Jumbotron,
} from 'react-bootstrap';


const _ = require('lodash');


// const proxy = 'http://localhost:4000';

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

  componentDidMount() {
    // this.data = null;
    // const aa = fetch(`${proxy}api/test`).then((a) => a.json()).then((userData) => {
    //   this.setState({ userData });
    //   this.data = userData;
    // });
    // console.log('component is mounted', aa, this.state);
    // this.props.history.push('/home');
    // this.props.history
    // fetch('http://localhost:4000/api/test').then((a) => a.text()).then((a) => console.log(a)).catch(() => {
    //   console.log('server is not running');
    // });
    console.log(this.state);
    // console.log(Container);
  }

  async onSubmitButtonClick(e) {
    e.preventDefault();
    console.log('Button on clicked HERE', this.userName, this.userPassword);
    // const userData = JSON.stringify({
    //   userName: 'guru',
    //   password: 'guru',
    // });
    // await fetch(`${proxy}/api/users`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: userData,
    // }).then((res) => res.text()).then((res) => console.log(res));

    // result.then(() => {
    //   console.log('successfull');
    // }).catch((error) => {
    //   console.log('error', error);
    // });
    // console.log('result', result);
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
