import React from 'react';
import './about-page.scss';

const AboutPage = () => {
  return (
    <React.Fragment>
      <div>
        <section>
          <div>
            <div className="typewriter" />
            <h1>HELLO</h1>
          </div>
        </section>
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
