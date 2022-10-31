import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';


export const LeftBarData = [
  {
    title: 'Home',
    icon: <HomeIcon/>,
    link:'/',
  },
  {
    title: 'Find Work',
    icon: <SearchIcon/>,
    link:'/Jobs',
  },
  {
    title: 'My Jobs',
    icon: <CollectionsBookmarkOutlinedIcon/>,
    link:'/Jobs',
  },
  {
    title: 'Messages',
    icon: <MarkUnreadChatAltOutlinedIcon/>,
    link:'/Home',
  },
];



const LeftBar = () => {
  return (
    <div className='leftbar'>
      <ul className='sidebarlist'>
        {LeftBarData.map((val, key) => {
          return(
            <li className='row'  key = {key} onClick={()=>{
              window.location.pathname = val.link;
            }}>

              <div id='icon'>{val.icon}</div>
              <div id='nav-title'>{val.title}</div>
             
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftBar


