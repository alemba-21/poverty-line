import React from 'react'
import {  GrAttachment } from 'react-icons/gr';


const ApplyJob = () => {
  return (
    <div className='bg-white mb-4'>
      <div className='bg-gray-200 h-1/2 max-w-[1000px] mx-auto p-4 my-4 rounded-lg border-dashed shadow-md shadow-green-600'>
        <div className='flex flex-col gap-2 p-4 '>

           <h1 className="text-center font-bold text-2xl">Cover Letter</h1>
           <textarea class="block p-2.5 w-full text-sm text-gray-900 
            h-40 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500
            focus:border-green-600 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600" id="grid-password" type="text" 
             />
              <h1 className='text-center font-bold text-2xl mt-10 '>Attatchment</h1>
              <form class="flex flex-row justify-center w-full space-x-6 bg-green-50 rounded-3xl p-4 border-dashed border-4 border-green-600">
                <div class="shrink-0">
                <GrAttachment className='h-6 text-Pink-600' />
                </div>
                <label class="block">
                  <input type="file" class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-600 file:text-black
                    hover:file:bg-green-300
                  "/>
                </label>
              </form>

        </div>
      </div>
    </div>
  )
}

export default ApplyJob