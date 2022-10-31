import React from 'react'
import Header from '../components/job/Header'
import LeftBar from '../components/job/LeftBar'
import RightBar from '../components/job/RightBar'
import CenterBar from '../components/job/CenterBar'

const Jobs = () => {
  return (
    <div className="keja">
      <Header/>
      <div className='home'>
          <div className='container'>
              <LeftBar/>
              <CenterBar/>
              <RightBar/>
          </div>
      </div>
    </div>
  )
}

export default Jobs