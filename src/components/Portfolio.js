import React, { useState } from 'react';

import Project from './Project';

export default function Portfolio() {

    const [projects]=useState([
        {
            key: 1,
           name : "Password Generator",
           repo : "https://github.com/squrpe/Password-Generator",
           link : "https://squrpe.github.io/Password-Generator/",
           description : "HTML5, CSS, Vanilla JavaScript",
           image: "https://github.com/squrpe/Password-Generator/raw/main/pwimg.png",
        },
        {
            key: 2,
            name : "Weather Dashboard",
            repo : "https://github.com/squrpe/weatherdashboard",
            link : "https://squrpe.github.io/weatherdashboard/",
            description : "HTML5, CSS, JavaScript, Weather API",
            image: "https://github.com/squrpe/weatherdashboard/raw/main/assets/img/demo.png",
         },
         {
            key: 3,
            name : "Social Network API",
            repo : "https://github.com/squrpe/social-network-api",
            link : "https://drive.google.com/file/d/1FKHm-L0DTETe54h2HdsLnvsMDelDkqBV/view",
            description : "JavaScript, Node.js, Express.js, MongoDB, Mongoose",
            image: "https://github.com/squrpe/social-network-api/raw/main/utils/images/thoughts.png",
         },
         {
            key: 4,
            name : "Just Another Text Editor",
            repo : "https://github.com/squrpe/text-editor",
            link : "https://text-editor100.herokuapp.com/",
            description : "JavaScript, Node.js",
            image: "https://github.com/squrpe/text-editor/raw/main/assets/jate.png",
         },
      ]);

    return (<div>
        {projects.map((project) => (
            <Project project={project}/>
        ))}
    </div>)
}