/*
Chart Component for Single type chart
Props : {
  chartType: 'bars' //takes any type of chart line, area, bars, candlesticks, and stepped area.
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

class MultipleChart extends Component {
  static generateOptions(props) {
    const series = Object.assign({}, props.chartType.map(type => ({ targetAxisIndex: 0, type })));
    const vAxes = Object.assign({}, props.vAxes.map(axis => axis));
    const hAxes = Object.assign({}, props.hAxes.map(axis => axis));
    return {
      title: props.title,
      vAxes,
      hAxes,
      animation: props.animate ? { duration: 1000, easing: 'out', startup: true } : null,
      legend: { position: props.legendPosition || 'none' },
      isStacked: !!props.stacked,
      pointSize: props.pointSize,
      // colors: props.colors,
      // vAxes: {
      //   0: {
      //     viewWindowMode: 'explicit',
      //     // gridlines: { color: 'transparent' },
      //     title: 'No. of tasks',
      //     viewWindow: { min: 0, max: 500 },
      //     ticks: [0, 100, 200, 300, 400, 500],
      //   },
      //   1: {
      //     title: 'No. of hours',
      //     // gridlines: { color: 'transparent' },
      //     viewWindow: { min: 0, max: 100 },
      //     ticks: [0, 20, 40, 60, 80, 100],
      //   },
      // },
      // pointSize: 8,
      series,
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
    chart.draw(data, MultipleChart.generateOptions(this.props));
  }
  render() {
    return (
      <div id={this.state.chartId} style={{ width: '100%', height: 'auto' }} />
    );
  }
}

export default MultipleChart;
MultipleChart.defaultProps = {
  chartData: [],
  colors: ['#aaaaaa'],

};

MultipleChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.array),
};
