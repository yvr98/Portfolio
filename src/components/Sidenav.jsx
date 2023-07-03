import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('#main');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const mainSectionHeight = document.getElementById('main').offsetHeight;
      const projectsSectionHeight = document.getElementById('projects').offsetHeight;

      if (scrollPosition < mainSectionHeight) {
        setCurrentSection('#main');
      } else if (scrollPosition < mainSectionHeight + projectsSectionHeight) {
        setCurrentSection('#projects');
      } else {
        setCurrentSection('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='#main'
            className={`w-[75%] flex justify-centre items-centre rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200`}
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#projects'
            className={`w-[75%] flex justify-centre items-centre rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200`}
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href='#contact'
            className={`w-[75%] flex justify-centre items-centre rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200`}
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            href='#main'
            className={`rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300`}
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href='#projects'
            className={`rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300`}
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href='#contact'
            className={`rounded-full shadow-lg ${
              currentSection !== '#main' ? 'bg-yellow-300 shadow-yellow-500' : 'bg-pink-200 shadow-pink-400'
            } m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300`}
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
