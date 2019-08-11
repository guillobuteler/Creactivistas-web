import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { marks } from '../../constants'
import './FormQuestion.css';


class FormQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  handleChange = (event, value) => {
    this.setState(() => ({ value: value }));
  }
  handleChangeParent = (event, value) => {
    const { id, handleChange } = this.props;
    this.setState(() => ({ value: value }));
    handleChange(id, value);
  }

  render() {
    const { value } = this.state;
    const { id, label, index } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={10} style={{ 
          borderBottom: index === 1 && '1px dotted red',
        }}>
          <p className="question-label">
            {label}
          </p>
        </Grid>
        <Grid item xs={2} style={{ 
          borderBottom: index === 1 && '1px dotted red',
        }}>
          <Slider
            id={id}
            value={value}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={5}
            onChange={this.handleChange}
            onChangeCommitted={this.handleChangeParent}
          />
        </Grid>
      </Grid>
    );
  }
}
  
export default FormQuestion;