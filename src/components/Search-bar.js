import React, { Component } from 'react';
// eslint-disable-next-line 
import { FormControl, Feedback, FormGroup, HelpBlock, ControlLabel, Button, Panel } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import 'bootstrap/dist/css/bootstrap.css';

class Searchbar extends Component {

      constructor(){
        super()
        this.state = {
          value: ""
        };
  }

checkArticleSearch = () => {
    const length = this.state.value.length;

    if(length === 0 ) return 'error'
    else return 'success'
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
  }

 handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  searchSubmit = () => {

  }

    render(){
        return(
            <Panel header='Search'>
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.checkArticleSearch()}
                >
                <ControlLabel>Topic</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Article Name"
                    onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>



                <FormGroup
                    controlId='formBasicText'
                >
                <ControlLabel>Start Date</ControlLabel>
                <DatePicker />
                </FormGroup>

                <FormGroup
                    controlId='formBasicText'
                >
                <ControlLabel>End Date</ControlLabel>
                <DatePicker />
                </FormGroup>

                <Button
                    bsSize='large'
                    bsStyle='success'
                    onClick={this.searchSubmit}
                >
                    Submit
                </Button>
            </form>
            </Panel>

        );
    }

}

export default Searchbar;