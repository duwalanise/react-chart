/*
Chart Component
props = {
  data : array // required, data should be array with header in first row
  width : string //optional should be provided with style format
  height : string //optional should be provided with style format
  animate : boolean // optional prop, defaults to false
  title : object // optional prop default to null
}
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    const dataTable = new google.visualization.arrayToDataTable(this.props.data);
    const chart = new google.visualization.BarChart(this.chart);
    chart.draw(dataTable, {});
  }

  render() {
    return (
      <div
        ref={(chart) => { this.chart = chart; }}
        style={{ width: this.props.width, height: this.props.height }}
      />
    );
  }
}

export default Chart;

Chart.defaultProps = {
  width: '100%',
  height: '500px',
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
