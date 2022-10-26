import React from 'react'
import Joe from '../../assets/joe.png'
import {TextField} from '@mui/material'


const ProfileView = () => {
  return (
    <div className='bg-white mb-4'>
      <div className='bg-green-50 max-w-[1240px] mx-auto mt-20 p-4 my-4 rounded-lg border-dashed shadow-md shadow-green-600'>
      <img className='border-4 shadow-md shadow-green-600 p-1 rounded-full w-40 mx-auto mt-[-3rem] bg-transparent' src={Joe} alt="/" />        
        

        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Career Summary</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquid necessitatibus ipsum quam. Eaque rerum quasi corporis facere eius harum suscipit recusandae facilis voluptatem ut inventore repellat, dolorum ex!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquid necessitatibus ipsum quam. Eaque rerum quasi corporis facere eius harum suscipit recusandae facilis voluptatem ut inventore repellat, dolorum ex!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquid necessitatibus ipsum quam. Eaque rerum quasi corporis facere eius harum suscipit recusandae facilis voluptatem ut inventore repellat, dolorum ex!
            </p>          
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Experience</h1>
          <div className='flex flex-row'>
            <div className='border-r-4 w-2/3 border-green-200 shadow-green-600 m-auto'>
              <h3 className="font-semibold text-xl">Date Started    : <span className="font-semibold italic text-green-800">January 15, 2019</span></h3>
              <h3 className="font-semibold text-xl">Date Completed : <span className="font-semibold italic text-green-800">october 25, 2022</span></h3>
            </div>
            <div className='p-4'>
            <li className=' marker:text-green-600 list-disc '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquid necessitatibus ipsum quam. Eaque rerum quasi corporis facere eius harum suscipit recusandae facilis voluptatem ut inventore repellat             
            </li>
            </div>
          </div>                  
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300 '>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Education</h1>
          <div className='flex flex-row'>
            <div className='border-r-4 w-2/3 border-green-200 shadow-green-600 m-auto'>
              <h3 className="font-semibold text-xl">Date Started    : <span className="font-semibold italic text-green-800">February 15, 2015</span></h3>
              <h3 className="font-semibold text-xl">Date Completed : <span className="font-semibold italic text-green-800">December 25, 2019</span></h3>
            </div>
            <div className='p-4'>
            <li className=' marker:text-green-600 list-disc '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquid necessitatibus ipsum quam.Eaque rerum quasi corporis facere eius harum suscipit recusandae facilis voluptatem ut inventore repellat             
            </li> 
            
            </div>
          </div>          
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Skills & Hobbies</h1>
            <div className='grid grid-rows-4 grid-flow-col gap-4'>
              <div>1)   Play Football</div>
              <div>2) Coding</div>
              <div>3) Reading Novels</div>
            </div>          
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Languages</h1>
          <div className='grid grid-rows-4 grid-flow-col gap-4'>
              <div>1)  English</div>
              <div>2) Kiswahili</div>
              <div>3) French</div>
            </div>          
        </div>
       
      </div>
    </div>
  )
}

export default ProfileView