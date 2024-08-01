import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { kingdoms } from '../data/data.js';

const Kingdoms = () => {
  return (
    <Row className="kingdoms-row">
      {kingdoms.map((kingdom) => (
        <Col key={kingdom.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="kingdom-card mb-4">
            <Card.Img variant="top" src={kingdom.image.default} alt={kingdom.name} />
            <Card.Body>
              <Card.Title>{kingdom.name}</Card.Title>
              <Card.Text>{kingdom.details}</Card.Text>
              <Button as={Link} to={`/kingdoms/${kingdom.id}`} variant="primary">
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Kingdoms;


