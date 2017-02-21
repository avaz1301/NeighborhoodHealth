import React, { Component } from 'react';
import Header from './header';
import MapParent from './map_parent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Neighborhood Health"/>
        <MapParent />
      </div>

    );
  }
}
