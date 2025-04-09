import React from 'react';
import '../styles/About.css';

function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'AWS'] },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
              With several years of experience in the industry, I specialize in building responsive and user-friendly
              web applications that solve real-world problems.
            </p>
            <p>
              My journey in software development began with a curiosity about how websites work, which led me to pursue
              a degree in Computer Science. Since then, I've worked on various projects ranging from e-commerce platforms
              to data visualization tools, always striving to write clean, maintainable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
        </div>

        <div className="skills-container">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4>{skillGroup.category}</h4>
                <ul>
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
