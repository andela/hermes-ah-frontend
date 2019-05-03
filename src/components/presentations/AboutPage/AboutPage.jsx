import React from 'react';
import './about-page.scss';

const AboutPage = () => {
  return (
    <React.Fragment>
      <div>
        {/* <div>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
        </div> */}
        <span className="circle" />
        <div className="title">
          <h1>Welcome to Authors Haven</h1>
          <div className="image" />
          <hr />
          <p className="desc">
            A home for bright minds to make their contributions
            <br />
            to the world profer solutions
          </p>
          <p className="desc">
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
        <div>
          <div className="typewriter" />
        </div>
        <div>
          <p className="textHeader" id="first-category">
            Biology
          </p>
          <p className="textHeader" id="first-article">
            Genetic Mutation fills the space
          </p>
          <div className="cards" id="left" />
          <p className="textHeader" id="second-category">
            Chemistry
          </p>
          <p className="textHeader" id="second-article">
            Why Kinetic motivates the nitro
          </p>
          <div className="cards" id="middle" />
          <p className="textHeader" id="third-category">
            Neurology
          </p>
          <p className="textHeader" id="third-article">
            The power of the brain
          </p>
          <div className="cards" id="right" />
        </div>
        <section className="bottom-section">
          <div className="img" />
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
