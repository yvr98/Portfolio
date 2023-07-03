import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import redtree from '../assets/redtree.png'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={redtree} alt="Red tree" />
         <div className='w-full h-screen absolute top-0 left-0'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-white font-roboto text-center'>
            <h1 className='sm:text-5xl text-4xl font-bold'>I'm Yudthesvar Raj</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 justify-center'>
                I'm a
                <TypeAnimation
      sequence={[
        'Passionate Coder',
        2000,
        'Lifelong Learner',
        2000,
        'Problem Solver',
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px', color: 'white' }}
    />
            </h2>
            <div className='flex justify-center pt-6 space-x-4'>
             <a href="https://github.com/yvr98" target="_blank">  
            <FaGithub className='cursor-pointer' size={20}/>
            </a>
           <FaLinkedinIn className='cursor-pointer' size={20}/>
          </div>
          </div>
         </div>
    </div>
  )
}

export default Main

