import React from 'react'

const JobNav = () => {
  return (
    <div className='w-screen h-[70px] z-10 bg-zinc-50 fixed drop-shadow-lg'>
      <div className='px-2 flex flex-row justify-between items-center w-full h-full'>

        <div className='flex basis-3/8 items-center'>
          <div className='flex mr-4 font-bold space-x-1'>
            
            <h1 className='text-3xl mr-4 sm:text-3xl text-green-600'>Home.</h1>
           
          </div>
        </div>

        <div className='flex justify-center items-center px-8 py-3 basis-1/2 h-[60px]'> 
          <div className='relative block w-full'>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 fill-green-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                height="30" viewBox="0 0 30 30">
                <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                </path>
              </svg>
            </span>
            <input type="text" className='w-full bg-zinc-200 placeholder:font-italitc border border-green-600 rounded-full py-2 pl-10 pr-4 focus:outline-none' placeholder='Search For Jobs here' />
          </div>
        </div>

        <div className='hidden md:flex flex-end pr-4 basis-1/8 mr-21 font-bold' >
          <button className='border-none bg-transparent text-green-600 mr-4 hidden'>Dashboard</button>
          <button className='px-4 py-2 rounded-3xl border-2 border-green-600 hidden'>Logout</button>
        </div>

      </div>
    </div>
  )
}

export default JobNav