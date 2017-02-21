import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import NeighborhoodMap from '../containers/neighborhood_map'

export default class MapParent extends Component{
  render(){
    return(
      <div id="map-parent">
        <div className="container">
          <Grid>
            <Row>
              <Col md={12}>
                <NeighborhoodMap />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
