import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { fetchPost, deletePost } from '../actions/index';
import {Link} from 'react-router';


class NeighborhoodMap extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentNeighborhood : {
        name: 'Jackson Heights',
        lat: 40.75551,
        long: -73.88575,
      }
    }
    this.initMap = this.initMap.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  componentDidMount(){
    console.log("DID MOUNT");
    this.initMap();
  }

  initMap(){
    console.log("INIT: "+this.props.neighborhood);
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

  updateMap(lt,lg){
    console.log("UPDATE: "+lt+" "+lg);
    // var newLatLng = new L.LatLng(lt, lg);
    // marker.setLatLng(newLatLng);
    //
    L.map('mapid').panTo([lt,lg]);
    // map.setView(new L.LatLng(lt, lg), 13);
    // L.marker([lt, lg]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Flushing.')
    //     .openPopup();
  }

  componentWillReceiveProps(nextProps){
    var formatName = nextProps.neighborhood.results[0].formatted_address
    var latt=nextProps.neighborhood.results[0].geometry.location.lat;
    var lng=nextProps.neighborhood.results[0].geometry.location.lng;
    this.setState({
      name : formatName,
      lat: latt,
      long: lng
    });
    console.log("WILL RECIEVE: "+nextProps.neighborhood);
    console.log(nextProps.neighborhood.results[0].formatted_address);
    // this.updateMap(latt,lng);
  }

  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <div id="mapid"></div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log("MAP STATE: "+JSON.stringify(state));
  return {neighborhood: state.search.coord};
}

export default connect(mapStateToProps, null)(NeighborhoodMap);
