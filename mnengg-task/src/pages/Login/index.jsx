import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAuthState } from '../../reducer/authentication/reducer';

//https://datausa.io/api/data?drilldowns=Nation&measures=Population;
//https://www.highcharts.com/blog/post/233-world-bank-open-data-api-highcharts-part1/

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      <Card>
        <Card.Header as={'h1'}>Login</Card.Header>
        <Card.Body
          style={{
            flexDirection: 'initial',
          }}
        >
          <form
            onSubmit={e => {
              e.preventDefault();
              dispatch(updateAuthState(true));
              navigate('/dashboard');
            }}
          >
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Email</label>
              </Col>
              <Col md={8}>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Password</label>
              </Col>
              <Col md={8}>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control"
                  minLength={8}
                />
              </Col>
            </Row>
            <div className="text-center">
              <Button type="submit" style={{ backgroundColor: '#efc623d4', color:'black' }}>Login</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
