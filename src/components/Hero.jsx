import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left-side">
        <h1>
          I bring events to life<br></br>
          <span className="italic">live and on camera.</span>
        </h1>

        <div className="info">
          <div className="info-block">
            <div>
              <img src="/icons/video-camera-white.svg" alt="camera white" className="icon" />
              <div className="label">Recent Experience</div>
              <div className="text">
                Freelance Camera Operator and Broadcast Director
              </div>
            </div>
          </div>
          <div className="info-block">
            <div>
              <img src="/icons/location-white.svg" alt="location" className="icon" />
              <div className="label">Location</div>
              <div className="text">Arcadia, California</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={"/imgs/taking-photo.jpg"} alt="Collin taking a video" />
      </div>
    </section>
  );
};

export default Hero;
