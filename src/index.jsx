import React from 'react';
import ReactDOM from 'react-dom';
import SingleChart from './chart.jsx';
import MultipleChart from './multipleChart.jsx';

const chartData = [
  ['Weeks', 'Reported Hours', 'Image Moderation', 'Image Annotation'],
  ['06/04', 20, 165, 128],
  ['06/11', 80, 35, 226],
  ['06/18', 70, 257, 146],
  ['06/25', 50, 439, 356],
  ['07/02', 30, 136, 112],
  ['07/09', 30, 361, 122],
  ['07/16', 30, 152, 242],
  ['07/30', 30, 246, 136],
  ['06/04', 20, 165, 128],
  ['06/11', 80, 335, 426],
  ['06/18', 70, 157, 246],
  ['06/25', 50, 239, 156],
  ['07/02', 30, 336, 112],
  ['07/09', 30, 461, 322],
  ['07/16', 30, 352, 142],
  ['07/30', 30, 146, 136],
  ['07/16', 30, 252, 142],
  ['07/30', 30, 346, 336],
  ['07/16', 30, 152, 142],
];

ReactDOM.render(
  <div>
    <SingleChart
      chartType="candle"
      vAxis={{ title: 'Hello World' }}
      hAxis={{ title: 'Horizontal' }}
      data={chartData}
      stacked
      animate
    />
    <MultipleChart
      chartType={['line', 'bars', 'area']}
      vAxes={[{ title: 'Hello Axes' }]}
      hAxes={[{ title: 'Horizontal Axes' }]}
      chartData={chartData}
      pointSize={8}
      stacked
      animate
    />
  </div>,
  document.getElementById('root'),
);
