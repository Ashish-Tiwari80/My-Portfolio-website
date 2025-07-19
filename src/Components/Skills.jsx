import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JAVASCRIPT", level: 75 },
    { name: "REACT", level: 80 },
    { name: "C++", level: 100 },
    { name: "PYTHON", level: 55 },
  ];

  return (
    <div className="my-5">
      <div className="section-title">
        <h2>Skills</h2>
        <p>
          I'm always learning and expanding my skillset to stay updated with modern tools and frameworks. 
          Whether it's web development or competitive programming, I enjoy building things that solve real-world problems.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          {skills.slice(0, 3).map((skill, idx) => (
            <div key={idx} className="mb-3">
              <strong>{skill.name}</strong>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {skills.slice(3).map((skill, idx) => (
            <div key={idx} className="mb-3">
              <strong>{skill.name}</strong>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;