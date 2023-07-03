import React from 'react';

const Contact = () => {
  const containerStyle = {
    backgroundColor: 'black',
    minHeight: '100vh',
  };

  const textStyle = {
    color: 'white',
  };

  return (
    <div id='contact' style={containerStyle} className='text-gray-100'>
      <div className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center mb-8' style={textStyle}>
          Contact
        </h1>
        <form
          action='https://getform.io/f/ead6d6d0-2472-40ce-baac-4ab64ab3419e'
          method='POST'
          encType='multipart/form-date'
        >
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2' style={textStyle}>
                Name
              </label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300 bg-gray-800 text-gray-100'
                type='text'
                name='name'
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2' style={textStyle}>
                Phone Number
              </label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300 bg-gray-800 text-gray-100'
                type='text'
                name='phone'
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2' style={textStyle}>
              Email
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-gray-800 text-gray-100'
              type='email'
              name='email'
            />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2' style={textStyle}>
              Subject
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-gray-800 text-gray-100'
              type='text'
              name='subject'
            />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2' style={textStyle}>
              Message
            </label>
            <textarea
              className='border-2 rounded-lg p-3 border-gray-300 bg-gray-800 text-gray-100'
              rows='10'
              name='message'
            ></textarea>
          </div>
          <button className='bg-yellow-300 text-black mt-4 w-full p-4 rounded-lg'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;



