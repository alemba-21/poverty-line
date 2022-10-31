import React from 'react'
 import Search from './SearchBar'
 import BookData from './Data.json'


const CenterBar = () => {
  return (
    <div className='centerbar'>
      <Search placeholder="Enter book name ..." data={BookData}/>
    </div>
    
  )
}

export default CenterBar