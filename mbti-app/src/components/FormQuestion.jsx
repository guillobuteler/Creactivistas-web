import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import './FormQuestion.css';

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

class FormQuestion extends React.Component {
  onChange = (event, value) => {
    const { handleChange } = this.props;
    handleChange(event.target.id, value);
  }

  render() {
    const { id, label, value, index } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={10} style={{ 
          borderBottom: index === 1 && '1px dotted red',
        }}>
          <p className="question-label">
            {label}
          </p>
        </Grid>
        <Grid item xs={1} style={{ 
          borderBottom: index === 1 && '1px dotted red',
        }}>
          <Slider
            id={id}
            value={value}
            // aria-labelledby="discrete-slider-always"
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={5}
            onChange={this.onChange}
          />
        </Grid>
      </Grid>
    );
  }
}
  
export default FormQuestion;