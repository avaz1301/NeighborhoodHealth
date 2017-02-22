import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCoords} from '../actions/index';
import {updateList} from '../actions/index';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class SearchForm extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  getValidationState(){
    const len = this.state.term.length;
    if(len > 5) return 'success';
    else if(len > 3) return 'warning';
    else if(len > 0) return 'error';
    else return null;
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    console.log(this.state.term);
    this.props.updateList(this.state.term);
    this.props.fetchCoords(this.state.term);
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <FormGroup
          controlId="formbasicText"
          validationState={this.getValidationState()}>
          <ControlLabel>Enter Your Neighborhood</ControlLabel>
          <FormControl
            type="text"
            value={this.state.term}
            placeholder="Jackson Heights"
            onChange={this.onInputChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" className="btn-primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default connect(null, {fetchCoords: fetchCoords, updateList: updateList})(SearchForm);
