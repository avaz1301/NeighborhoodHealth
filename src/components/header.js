import React, { Component } from 'react';
import {Row, Col, Jumbotron, Button} from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="container text-center">
          <Row>
            <h1>Hello World</h1>
          </Row>
        </div>
      </div>
    );
  }
}
