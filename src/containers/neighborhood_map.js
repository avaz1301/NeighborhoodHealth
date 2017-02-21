import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { fetchPost, deletePost } from '../actions/index';
import {Link} from 'react-router';


export default class NeighborhoodMap extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentNeighborhood : {
        name: null,
        lat: 40.75551,
        long: -73.88575,
      }
    }
    // this.setUpMap = this.setUpMap.bind(this);
  }

  componentDidMount(){
        var lat = this.state.currentNeighborhood.lat;
        var lng = this.state.currentNeighborhood.long;
        var map = L.map('mapid').setView([lat,lng], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.75551, -73.88575]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Jackson Heights.')
            .openPopup();
        map.on('click', this.onMapClick);
  }

  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }



  render(){
    return(
      <div>
        <h1>HELLO WORLD</h1>
        <div id="mapid"></div>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return {
//     neighborhood: state.posts.post
//   };
// }
//
// export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
