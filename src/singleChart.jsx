/*
Chart Component for Single type chart
Props : {
  chartType: 'bars' //takes any type of chart line, area, bars, and stepped area.
  title: 'Chart Title
  vAxis: { title: 'virtical axis title' }
  hAxis: { title: 'horizontal axis title' }
  chartData: [['header', 'some', 'type'],['value', 10, 20],['value', 23, 12]],
  stacked: true/false,
  animate: true/false,
}
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleChart extends Component {
  static generateOptions(props) {
    return {
      title: props.title,
      vAxis: props.vAxis,
      hAxis: props.hAxis,
      legend: { position: props.legendPosition || 'none' },
      animation: props.animate ? { duration: 1000, easing: 'out', startup: true } : null,
      isStacked: !!props.stacked,
      // colors: props.colors,
      seriesType: props.chartType || null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      chartId: Math.random().toString(36).substring(2),
    };
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    const { chartData } = this.props;
    const data = new google.visualization.arrayToDataTable(chartData);
    const chart = new google.visualization.ComboChart(document.getElementById(this.state.chartId));
    chart.draw(data, SingleChart.generateOptions(this.props));
  }
  render() {
    return (
      <div id={this.state.chartId} style={{ width: '100%', height: 'auto' }} />
    );
  }
}

export default SingleChart;
SingleChart.defaultProps = {
  chartData: [],
  colors: ['#aaaaaa'],
};

SingleChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.array),
};
