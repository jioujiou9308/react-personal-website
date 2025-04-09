import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, and secure checkout.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      image: '/images/projects/ecommerce.jpg',
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.yourdomain.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: '/images/projects/task-manager.jpg',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-app.yourdomain.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecast data and interactive maps.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      image: '/images/projects/weather-app.jpg',
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://weather.yourdomain.com'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
