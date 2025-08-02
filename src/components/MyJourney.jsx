import React from 'react';
import './MyJourney.css';
import { FaGraduationCap, FaSuitcase, FaCalendarAlt } from 'react-icons/fa';

const MyJourney = () => {
  return (
    <section className="qualification section">
      <h2 className="section-title" data-heading="My Journey">
        Qualifications
      </h2>

      <div className="qualification-container container grid">
        {/* Education Section */}
        <div className="education">
          <h3 className="qualification-title">
            <FaGraduationCap /> Education
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Chapman University (Orange, CA)</h3>
              <p className="timeline-text">BFA in Broadcast Journalism and Documentary</p>
              <span className="timeline-date">
                <FaCalendarAlt /> 2019 - 2023
              </span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Arcadia High School (Arcadia, CA)</h3>
              <p className="timeline-text">General Education</p>
              <span className="timeline-date">
                <FaCalendarAlt /> 2016 - 2019
              </span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience">
          <h3 className="qualification-title">
            <FaSuitcase /> Experience
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Midnight Rain (Los Angeles)</h3>
              <p className="timeline-text">Camera Operator / Camera Utility / Expression Operator</p>
              <span className="timeline-date">
                <FaCalendarAlt /> 2024 - Present
              </span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">LightSpace Studios (Los Angeles)</h3>
              <p className="timeline-text">Technical Director / Stream Technical Lead</p>
              <span className="timeline-date">
                <FaCalendarAlt /> 2024 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
