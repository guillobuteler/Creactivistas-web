import React from 'react';


class ResultsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGraph: false,
    };
  }
  handleClickOpen = () => {
    this.setState(() => ({ showGraph: true }));
  }
  render() {
    const { showGraph } = this.state;
    const { name, answers } = this.props.data;

    return (
      <div className="ResultsChart">
      </div>
    );
  }
}
  
export default ResultsChart;
