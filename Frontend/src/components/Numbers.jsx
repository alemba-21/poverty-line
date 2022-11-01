import React from 'react'

const Numbers = () => {
  return (
    <div className='px-52 mt-20'>
        <h1 className='text-2xl text-black my-5'>Until today, we have worked with our partners to achieve...</h1>
        <div className='bg-green-900 flex space-x-10 p-5 justify-between rounded'>
            <div className='flex flex-col space-y-2'>
                <h1 className=' text-7xl text-white'>200</h1>
                <h1 className='text-white text-2xl'>Partnerships</h1>

            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className=' text-7xl text-white'>1500</h1>
                <h1 className='text-white  text-2xl'>Hired Graduates</h1>

            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-7xl text-white'>47</h1>
                <h1 className='text-white text-2xl'>Locations</h1>

            </div>

        </div>
    </div>
  )
}

export default Numbers