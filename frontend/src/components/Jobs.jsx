import React from 'react'
import './jobs.css'

const Jobs = () => {
  return (
    <div className='card'>
        <div className='box'>
          <form className='entry-form'>
            <div className='title'>
              <h1>Job Title</h1>
              <input 
              class= 'heading'
              type='text'
              placeholder='Job Title'
              />
            </div>
            <div className='des'>
              <h1>Job Description</h1>
              <input
                class= 'job'
                type='textarea'
                placeholder='Job Description'
              />  
            </div>
            <div className='skills'>
              <h1>Required Skills</h1>
              <input
                class= 'skill'
                type='text'
                placeholder='Required Skills'
              />  
            </div>
          </form>
        </div>
    </div>
  )
}

export default Jobs