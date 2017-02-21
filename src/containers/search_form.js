import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export default class SearchForm extends Component{
  constructor(props){
    super(props);

    this.state = {value : ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  getValidationState(){
    const len = this.state.value.length;
    if(len > 5) return 'success';
    else if(len > 3) return 'warning';
    else if(len > 0) return 'error';
    else return null;
  }

  onInputChange(e){
    this.setState({value: e.target.value});
  }

  render(){
    // onSubmit={handleSubmit(this.onSubmit.bind(this))}
    return(
      <form>
        <FormGroup
          controlId="formbasicText"
          validationState={this.getValidationState()}>
          <ControlLabel>Enter Your Neighborhood</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
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
