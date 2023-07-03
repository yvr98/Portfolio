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
              description: 'An ai powered movie application.',
              link: 'https://showpia.netlify.app/',
            },
            {
              img: Pf,
              title: 'Portfolio Website',
              description: 'Made with React,Tailwind and vite',
              link: '/ocean',
            },
            {
              img: nba,
              title: 'NBA Data Mining',
              description: 'Data Mining Project on a Nba Dataset',
              link: 'https://github.com/yvr98/NBA-Data-mining-project/blob/main/.ipynb_checkpoints/part%204%20phase%202%20-checkpoint.ipynb',
            },
            {
              img: tree2Img,
              title: 'Unity state machine',
              description: 'Unity state machine',
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


