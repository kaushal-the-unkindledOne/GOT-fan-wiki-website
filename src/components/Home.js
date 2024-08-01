import React from 'react';
import { Link } from 'react-router-dom';
import sideImage from '../images/side.png'; // Ensure the correct path
import georgeImage from '../images/man.jpg'; // Path to the uploaded image
import { gotCharacters, dragons, kingdoms } from '../data/data.js';
import '../styles/custom.css';

const Home = () => {
  return (
    <div>
      <div id="home" className="home-container">
        <div className="background-overlay">
          <div className="content">
            <img src={sideImage} alt="Game of Thrones" className="side-image" />
            <div className="text-box">
              <h1>WELCOME TO THE GAME OF THRONES UNIVERSE</h1>
              <p>Game of Thrones is a fantasy series set in the fictional continents of Westeros and Essos. It follows the power struggles among noble families as they vie for control of the Iron Throne. The show features complex characters, political intrigue, epic battles, and mythical elements like dragons and White Walkers. Its story weaves together themes of power, loyalty, and betrayal.</p>
              <div className="george-section">
                <img src={georgeImage} alt="George R.R. Martin" className="george-image" />
                <div className="george-desc">
                  <h2>George R.R. Martin</h2>
                  <p>George R.R. Martin is the acclaimed author of the A Song of Ice and Fire series, which inspired the Game of Thrones television series. His intricate world-building and complex characters have captivated readers worldwide. Martin's storytelling weaves together themes of power, loyalty, and betrayal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="characters" className="section-container">
        <div className="frame border-frame">
          <h2>Characters</h2>
          <div className="card-container">
            {gotCharacters.map((character) => (
              <Link to={`/characters/${character.id}`} className="card-link" key={character.id}>
                <div className="card">
                  <img src={character.image} alt={character.name} />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.details}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div id="dragons" className="section-container">
        <div className="frame border-frame">
          <h2>Dragons</h2>
          <div className="card-container">
            {dragons.map((dragon) => (
              <Link to={`/dragons/${dragon.id}`} className="card-link" key={dragon.id}>
                <div className="card">
                  <img src={dragon.image} alt={dragon.name} />
                  <div className="card-body">
                    <h5 className="card-title">{dragon.name}</h5>
                    <p className="card-text">{dragon.details}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div id="kingdoms" className="section-container">
        <div className="frame border-frame">
          <h2>Kingdoms</h2>
          <div className="card-container">
            {kingdoms.map((kingdom) => (
              <Link to={`/kingdoms/${kingdom.id}`} className="card-link" key={kingdom.id}>
                <div className="card">
                  <img src={kingdom.image} alt={kingdom.name} />
                  <div className="card-body">
                    <h5 className="card-title">{kingdom.name}</h5>
                    <p className="card-text">{kingdom.details}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
