import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { gotCharacters } from '../data/data.js';
import '../styles/custom.css';

const Characters = () => {
  return (
    <Row className="characters-row">
      {gotCharacters.map((character) => (
        <Col key={character.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="character-card mb-4">
            <Card.Img variant="top" src={character.image.default} alt={character.name} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.details}</Card.Text>
              <Button as={Link} to={`/characters/${character.id}`} variant="primary">
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Characters;

