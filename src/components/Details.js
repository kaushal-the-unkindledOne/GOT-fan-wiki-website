import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gotCharacters, dragons, kingdoms } from '../data/data.js';
import { Card, Button } from 'react-bootstrap';
import '../styles/custom.css';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const findItem = () => {
      let foundItem = gotCharacters.find(char => char.id.toString() === id);
      if (!foundItem) {
        foundItem = dragons.find(dragon => dragon.id.toString() === id);
      }
      if (!foundItem) {
        foundItem = kingdoms.find(kingdom => kingdom.id.toString() === id);
      }
      setItem(foundItem);
    };
    findItem();
  }, [id]);

  return (
    item && (
      <Card className="details-card mt-4">
        <Card.Img variant="top" src={item.image.default} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.details}</Card.Text>
          {item.video && (
            <video width="100%" controls>
              <source src={item.video.default} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <Button as={Link} to="/" variant="secondary">
            Back
          </Button>
        </Card.Body>
      </Card>
    )
  );
};

export default Details;