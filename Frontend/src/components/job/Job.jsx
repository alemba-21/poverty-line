import React from 'react'

const Job = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
        <div class="bg-green-50 pt-4 border shadow-2xl mt-20 rounded-3xl h-screen overflow-y-scroll border-green-600 max-w-[1240px] m-auto ">
          <div class="relative bg-green-600 rounded-xl mx-2 shadow-lg shadow-green-300 text-black col-start-1 col-end-7 w-[1100px] overflow-hidden my-4">
            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
            <div className='border border-zinc-600  shadow-md rounded-lg h-16 w-full pl-5 flex m-auto'>
              {/* Job Preview */}
            <table class="border-collapse table-fixed p-2 ml-[-20px] w-full rounded-md shadow-lg mr-12">
              <thead className='bg-green-50'>
                <tr>
                  <th class="border border-green-600 ...">Company</th>
                  <th class="border border-green-600 ...">Job Title</th>
                  <th class="border border-green-600 ...">Job Type</th>
                  <th class="border border-green-600 ...">Time Posted</th>
                </tr>
              </thead>
              <tbody className='bg-green-50'>
                <tr>
                  <td class="border border-green-600 ..."><p className='text-center'>KRA Kenya</p></td>
                  <td class="border border-green-600 ..."><p className='text-center '>Full Stack Angular Developer</p></td>
                  <td class="border border-green-600 ..."><p className='text-center italic'>Full Time</p></td>
                  <td class="border border-green-600 ..."><p className='text-center italic'>57 min ago</p></td>
                </tr>
              </tbody>
            </table>

            </div>
            <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            {/* Content */}
            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-56'>
              <div className='p-4'>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                  <button className='bg-green-600 text-white px-4 py-2 rounded-3xl mt-4'>Apply</button>
              </div>
            </div>          
          </div> 
          <div class="relative bg-green-600 rounded-xl mx-2 shadow-lg shadow-green-300 text-black col-start-1 col-end-7  w-[1100px] overflow-hidden my-4">
            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
            <div className='border border-zinc-600  shadow-md rounded-lg h-16 w-full pl-5 flex m-auto'>
              {/* Job Preview */}
            <table class="border-collapse table-fixed p-2 ml-[-20px] w-full rounded-md shadow-lg mr-12">
              <thead className='bg-green-50'>
                <tr>
                  <th class="border border-green-600 ...">Company</th>
                  <th class="border border-green-600 ...">Job Title</th>
                  <th class="border border-green-600 ...">Job Type</th>
                  <th class="border border-green-600 ...">Time Posted</th>
                </tr>
              </thead>
              <tbody className='bg-green-50'>
                <tr>
                  <td class="border border-green-600 ..."><p className='text-center'>Safaricom</p></td>
                  <td class="border border-green-600 ..."><p className='text-center '>Ruby on Rails Developer</p></td>
                  <td class="border border-green-600 ..."><p className='text-center italic'>Short Time</p></td>
                  <td class="border border-green-600 ..."><p className='text-center italic'>3 hrs ago</p></td>
                </tr>
              </tbody>
            </table>

            </div>
            <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            {/* Content */}
            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-56'>
              <div className='p-4'>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                  <button className='bg-green-600 text-white px-4 py-2 rounded-3xl mt-4'>Apply</button>
              </div>
            </div>          
          </div>
          

      </div>
      
    </div>
  )
}

export default Job