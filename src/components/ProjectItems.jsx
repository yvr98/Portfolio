const ProjectItems = ({ img, title, description, link, inProgress }) => {
  return (
    <div className='group relative flex items-center justify-center h-64 w-full shadow-md group-hover:shadow-lg rounded-xl transition-shadow duration-300 overflow-hidden'>
      <img src={img} alt="/" className='w-full h-full object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105' />
      <div className={`absolute bottom-0 left-0 w-full p-4 transition-opacity transform translate-y-full ${inProgress ? 'opacity-0' : 'group-hover:opacity-100 opacity-0'} absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 w-full p-4 transition-all transform translate-y-full group-hover:translate-y-0 duration-500`}>
        <h3 className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </h3>
        <p className='pb-2 text-white'>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className='mt-2 text-white underline cursor-pointer'>More Info</p>
        </a>
      </div>
      {inProgress && <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-2xl font-bold text-white transition-opacity opacity-0 group-hover:opacity-100'>In Progress</div>}
    </div>
  )
}

export default ProjectItems







