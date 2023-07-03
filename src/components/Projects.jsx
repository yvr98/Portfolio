import React from 'react'
import ProjectItem from './ProjectItems'
import oceanImg from '../assets/ocean.jpg'
import treeImg from '../assets/tree.jpg'
import tree2Img from '../assets/tree2.jpg'
import showpia from '../assets/Screenshot 2023-07-02 203005.png'
import Pf from '../assets/Pfolio.png'
import nba from '../assets/Screenshot 2023-07-02 200955.png'
const Projects = () => {
  const containerStyle = {
    backgroundColor: 'black',
    minHeight: '100vh',
  };

  return (
    <div id='projects' style={containerStyle} className='text-white'>
      <div className='max-w-[1040px] mx-auto p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#efefef]'>Projects</h1>
        <p className='text-center py-8'>
          Projects I have worked on.
        </p>
        <div className='space-y-12'>
          {[
            {
              img: showpia,
              title: 'Showpia',
              description: 'An ai powered movie application made using React.js,Material UI,Redux and Alan Ai.Try out commands like make it dark or What is this app.',
              link: 'https://showpia.netlify.app/',
            },
            {
              img: Pf,
              title: 'Portfolio Website',
              description: 'A custom portfolio website made with React,Vite JS and Tailwind Css',
              link: '/ocean',
            },
            {
              img: nba,
              title: 'NBA Data Mining',
              description: 'This project utilized a dataset that comprised NBA games data from the 2004 season to December 2020. The objective was to conduct comparative analyses of players and teams in the NBA and identify correlations between player and team statistics and success in the regular season. The dataset consisted of five interconnected datasets, providing information on players, team stats, rankings, and detailed game data. The project aimed to provide insights for improving team performance and predicting future outcomes.',
              link: 'https://github.com/yvr98/NBA-Data-mining-project/blob/main/.ipynb_checkpoints/part%204%20phase%202%20-checkpoint.ipynb',
            },
            {
              img: tree2Img,
              title: 'Unity state machine',
              description: 'Designed and implemented a custom state machine in Unity 3D to manage complex behaviors and transitions within a game/application. Developed a modular and efficient system by breaking down behaviors into separate states and defining transitions based on specific conditions. Utilized object-oriented programming principles to create state classes and a central manager script to handle state transitions. Resulted in improved code organization, scalability, and maintainability',
              link: '/tree2',
              inProgress: true,
            },
          ].map((project) => (
            <div key={project.title} className='grid sm:grid-cols-2 gap-12 items-center'>
              <ProjectItem
                img={project.img}
                title={project.title}
                link={project.link}
                inProgress={project.inProgress}
              />
              <div>
                <h2 className='text-3xl font-bold'>{project.title}</h2>
                <p className='mt-4 text-lg'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects


