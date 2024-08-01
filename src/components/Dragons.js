import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { dragons } from '../data/data.js';

const Dragons = () => {
  return (
    <Row className="dragons-row">
      {dragons.map((dragon) => (
        <Col key={dragon.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="dragon-card mb-4">
            <Card.Img variant="top" src={dragon.image.default} alt={dragon.name} />
            <Card.Body>
              <Card.Title>{dragon.name}</Card.Title>
              <Card.Text>{dragon.details}</Card.Text>
              <Button as={Link} to={`/dragons/${dragon.id}`} variant="primary">
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dragons;
