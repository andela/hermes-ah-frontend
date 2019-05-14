import React from 'react';
import './about-page.scss';
import NavBar from '../../shared/NavBar/NavBar';

const AboutPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <div className="title">
          <h1>Welcome to Authors Haven</h1>
          <div className="top-image" />
          <hr />
          <p className="top-content">
            A home for bright minds to make their contributions
            <br />
            to the world profer solutions
          </p>
          <p className="top-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            voluptatum dolorem et odio
            <br />
            ut rerum eaque rem, temporibus neque neque corporis omnis iste saepe
            ab, reiciendis nostrum
            <br />
            eveniet harum doloribus sapiente.
          </p>
        </div>
        <br />
        <div className="card-holder">
          <div>
            <p className="text-header">Biology</p>
            <p className="text-header">Genetic Mutation fills the space</p>
            <div className="cards" id="left" />
          </div>
          <div>
            <p className="text-header">Chemistry</p>
            <p className="text-header">Why Kinetic motivates the nitro</p>
            <div className="cards" id="middle" />
          </div>
          <div>
            <p className="text-header">Neurology</p>
            <p className="text-header">The power of the brain</p>
            <div className="cards" id="right" />
          </div>
        </div>
        <section className="bottom-section">
          <div className="bottom-image" />
          <div className="text-container">
            <p className="text">
              A CUSTOMIZABLE READING EXPERIENCE MADE JUST FOR YOU
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
