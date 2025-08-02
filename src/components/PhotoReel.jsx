import React, { useRef, useEffect } from 'react';
import './PhotoReel.css';

const projects = [
  {
    image: '/imgs/new-york-portrait.jpg',
    title: 'Photo Example 1',
    caption: 'New York Life',
    gradientClass: 'gradient-orange',
    size: 'small',
  },
  {
    youtube: 'https://www.youtube.com/embed/aa3RH17mpMU?enablejsapi=1',
    title: 'Video Example',
    caption: 'Peaceful Video',
    gradientClass: 'gradient-blue',
    size: 'large',
  },
  {
    image: '/imgs/taiwan-landscape.jpg',
    title: 'Photo Example 2',
    caption: 'The Vibrance of Taiwan',
    gradientClass: 'gradient-blue',
    size: 'large',
  },
  {
    image: '/imgs/selfie-portrait.jpg',
    title: 'Photo Example 3',
    caption: 'Selfie Time',
    gradientClass: 'gradient-orange',
    size: 'small',
  },
];

const PhotoReel = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const iframe = videoRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframeWindow = iframe.contentWindow;
        if (entry.isIntersecting) {
          iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else {
          iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      },
      { threshold: 0.5 }
    );

    // Ensure YouTube API is ready by sending 'listening' message
    const handleApiReady = () => {
      iframe.contentWindow.postMessage('{"event":"listening","id":1}', '*');
    };

    iframe.addEventListener('load', handleApiReady);
    observer.observe(iframe);

    return () => {
      observer.disconnect();
      iframe.removeEventListener('load', handleApiReady);
    };
  }, []);

  return (
    <section className="photo-reel-container">
      <div className="reel-row">
        {projects.slice(0, 2).map((project, index) => (
          <div className="reel-column" key={index}>
            <div className={`reel-card ${project.gradientClass} ${project.size}`}>
              <div className="media-container">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="media"
                  />
                )}
                {project.youtube && (
                  <iframe
                    ref={videoRef}
                    src={project.youtube}
                    title={project.title}
                    className="media"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
            <p className="caption">
              <strong>{project.title}</strong> {project.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="reel-row">
        {projects.slice(2).map((project, index) => (
          <div className="reel-column" key={index + 2}>
            <div className={`reel-card ${project.gradientClass} ${project.size}`}>
              <div className="media-container">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="media"
                  />
                )}
              </div>
            </div>
            <p className="caption">
              <strong>{project.title}</strong> {project.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoReel;
