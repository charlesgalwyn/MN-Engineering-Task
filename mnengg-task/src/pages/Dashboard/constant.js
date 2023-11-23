import Highcharts from 'highcharts';

export const API_URL =
  'https://cdn.jsdelivr.net/gh/highcharts/highcharts@c55c2f39d531b227dc239d2d63d6eef882260cb6/samples/data/worldbank-norway.json';

export const chartOptions = ({
  indicatorName,
  yearList,
  countryName,
  arrayFinal,
}) => ({
  chart: {
    type: 'spline',
  },
  title: {
    text: indicatorName,
  },
  tooltip: {
    valueDecimals: 2,
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  subtitle: {
    text: 'Source: World Bank Data',
  },
  xAxis: {
    categories: yearList.reverse(), // .reverse() to have the min year on the left
  },
  series: [
    {
      name: countryName,
      data: arrayFinal.reverse(), //
    },
  ],
});

export const tempertaureChartOptions = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Monthly Average Temperature',
  },
  subtitle: {
    text:
      'Source: ' +
      '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
      'target="_blank">Wikipedia.com</a>',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: 'Reggane',
      data: [
        16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
      ],
    },
    {
      name: 'Tallinn',
      data: [
        -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
      ],
    },
  ],
};

export const nesbyenTemperatureChartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Browser market shares in Nov, 2023',
    align: 'left',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 70.67,
          sliced: true,
          selected: true,
        },
        {
          name: 'Edge',
          y: 14.77,
        },
        {
          name: 'Firefox',
          y: 4.86,
        },
        {
          name: 'Safari',
          y: 2.63,
        },
        {
          name: 'Internet Explorer',
          y: 1.53,
        },
        {
          name: 'Opera',
          y: 1.4,
        },
        {
          name: 'Sogou Explorer',
          y: 0.84,
        },
        {
          name: 'QQ',
          y: 0.51,
        },
        {
          name: 'Other',
          y: 2.6,
        },
      ],
    },
  ],
};
