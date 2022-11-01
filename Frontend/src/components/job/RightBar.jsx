import React from 'react'
import {Link} from 'react-router-dom'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='companyicon'>
        <img src='https://simg.nicepng.com/png/small/178-1780776_googles-new-dataset-search-aims-to-assist-researchers.png' alt="Google" />
      </div>
      <div className='jobtitle'>Frontend Developer</div>
      <div className='companyname'>Google, San francisco</div>
      <div className="aboutjob" class='leading-loose'>
        <h4 class='ml-5 font-bold'>Description</h4>
        <p class='ml-10'>Google is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.</p>
      </div>
      <div className="qualifications" class='mb-10 leading-loose'> 
      <h4 class='ml-5 font-bold'>Minimum Qualifications;</h4>
      <p class='ml-10'>* Bachelor's degree in Computer Science, related field or equivalent practical experience.</p>
      <p class='ml-10'>* 7 years of experience</p>
      <p class='ml-10'>* Strong collaboration and presentation skills</p>
      <p class='ml-10'>* Excellent leadership, communication and teamwork skills</p>
      </div>
      <Link to='/Apply'>
      <button class='float-right p-2 mb-10'>Apply Now</button>
      </Link>
    </div>
  )
}

export default RightBar