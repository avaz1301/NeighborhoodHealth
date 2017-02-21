import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import SearchForm from "../containers/search_form";
import SearchHistory from "../components/search_history";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container text-center">
          <h1>{this.props.title}</h1>
          <Grid>
            <Row>
              <Col md={3} sm={12}></Col>
              <Col md={6} sm={12}>
                <SearchForm />
              </Col>
              <Col md={3} sm={12}>
                <SearchHistory />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
