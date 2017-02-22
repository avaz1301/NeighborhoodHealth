import React, {Component} from 'react';
import {fetchCoords} from '../actions/index';
import { connect } from 'react-redux';

class SearchHistory extends Component{
  constructor(props){
    super(props);
    this.state = {id: 0};
    this.renderList = this.renderList.bind(this);
  }

  renderList(){
    if(this.props.searches.length===0){
      return <li>No recent searches</li>
    }
    console.log(this.props.searches);
    return this.props.searches.map((search) => {
      return <li key={this.state.id++}><a href="#">{search}</a></li>;
    });
  }

  render(){
    return(
      <div>
        <h3>Recent Searches</h3>
        <ul id="searchHistory">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {searches : state.search.searches}
}

export default connect(mapStateToProps, {fetchCoords:fetchCoords})(SearchHistory);
