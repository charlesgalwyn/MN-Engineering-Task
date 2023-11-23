import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  API_URL,
  chartOptions,
  nesbyenTemperatureChartOptions,
  tempertaureChartOptions,
} from './constant';
import { Card, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [options, setOptions] = React.useState({
    indicatorName: '',
    yearList: [],
    arrayFinal: [],
    countryName: '',
  });

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch(API_URL)
        .then(res => res.json())
        .then(result => {
          var arrayString = [],
            yearList = [],
            arrayFinal = [],
            countryName,
            indicatorName;
          result[1].forEach(function (data) {
            countryName = data.country.value;
            indicatorName = data.indicator.value;
            yearList.push(data.date);
            arrayString.push(data.value);
          });
          for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] !== null) {
              arrayFinal.push(parseFloat(arrayString[i]));
            } else {
              arrayFinal.push(null);
            }
          }
          setOptions({
            indicatorName,
            yearList,
            arrayFinal,
            countryName,
          });
        });
    };
    fetchData();
  }, []);

  return (
    <div className="m-3">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Word bank annual growth</Card.Header>
            <Card.Body>
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions(options)}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Average temperature</Card.Header>
            <Card.Body>
              <HighchartsReact
                highcharts={Highcharts}
                options={tempertaureChartOptions}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Average temperature</Card.Header>
            <Card.Body>
              <HighchartsReact
                highcharts={Highcharts}
                options={nesbyenTemperatureChartOptions}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Share market</Card.Header>
            <Card.Body>
              <HighchartsReact
                highcharts={Highcharts}
                options={nesbyenTemperatureChartOptions}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
