import React from 'react'
import Joe from '../assets/joe.png'
import Ceo from '../assets/ceo.jpeg'
import { AiOutlineSend } from 'react-icons/ai';



const Message = () => {
  return (
    <div className='bg-white mb-4'>
      <h1 className="text-4xl font-bold text-center">Messages</h1>
      <div className='bg-green-50 h-screen max-w-[1000px] mx-auto p-4 my-4 rounded-lg border-dashed shadow-md shadow-green-600'>
        <div className='flex flex-wrap gap-4 p-4 '>

          <div className='flex flex-row gap-1 rounded-3xl '>
             <img className='border border-green-600  shadow-md p-1 rounded-full w-20 bg-transparent' src={Joe} alt="/" />
           <div className='w-full rounded-3xl border border-green-600 p-2  shadow-green-600 m-auto bg-green-50'>
              <h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veritatis possimus minima incidunt quis quae id odit ab, ipsam debitis</h3>
            </div>
          </div>
          <div className='flex flex-row gap-1 rounded-3xl '>
           <div className='w-full rounded-3xl border border-green-600 p-2  shadow-green-600 m-auto bg-slate-200'>
              <h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veritatis possimus minima incidunt quis quae id odit ab, ipsam debitis</h3>
            </div>
             <img className='border border-green-600  shadow-md p-1 rounded-full w-20 bg-transparent' src={Ceo} alt="/" />
          </div>
          <div className='flex flex-row gap-1 rounded-3xl '>
             <img className='border border-green-600  shadow-md p-1 rounded-full w-20 bg-transparent' src={Joe} alt="/" />
           <div className='w-full rounded-3xl border border-green-600 p-2  shadow-green-600 m-auto bg-green-50'>
              <h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veritatis possimus minima incidunt quis quae id odit ab, ipsam debitis</h3>
            </div>
          </div>
          <div className='flex flex-row gap-1 rounded-3xl '>
           <div className='w-full rounded-3xl border border-green-600 p-2  shadow-green-600 m-auto bg-slate-200'>
              <h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veritatis possimus minima incidunt quis quae id odit ab, ipsam debitis</h3>
            </div>
             <img className='border border-green-600  shadow-md p-1 rounded-full w-20 bg-transparent' src={Ceo} alt="/" />
          </div>
          <div className='flex m-auto w-96 flex-row rounded-xl gap-1 place-content-center absolute inset-x-0 bottom-0 p-2   '>
          <textarea className='h-16 rounded-xl w-96 shadow-green-600 border p-2 border-green-600'>
            Type your message here...
          </textarea>
          <AiOutlineSend className='h-12 text-3xl font-bold text-center text-green-600' />
          </div>


        </div>
      </div>        
    </div>
  )
}

export default Message