import React, {Component} from 'react';

export default class SearchHistory extends Component{
  constructor(props){
    super(props);

    this.state = {
      searches : [
        {
          id: 0,
          name: "Jackson Heights"
        },
        {
          id: 1,
          name: "Elmhurst"
        },
        {
          id: 2,
          name: "Corona"
        },
        {
          id: 3,
          name: "Williamsburg"
        }
      ]
    };
    this.renderList = this.renderList.bind(this);
  }

  renderList(){
    console.log(this.state.searches);
    return this.state.searches.map((search) => {
      return <li key={search.id}><a href="#">{search.name}</a></li>;
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
