import React from 'react';

export default function Project({ project }) {
  const { name, repo, link, description, image, key } = project || {}
  console.log(project);

  return (
    <div className="card" style={{ width: '18rem' }} key={key}>
      
      <img alt={name} src={image}/>
      
      <div className="project-text">

        <h3>
          <a href={link}>{name}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>

        <p>{description}</p>
        
      </div>
    </div>

  );
}