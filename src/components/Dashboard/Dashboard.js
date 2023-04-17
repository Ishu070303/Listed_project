import React from 'react';

import SideBar from './SideBar';
import './dash.css';
import Content from './Content';

const Dashboard = () => {
  return (
    <div className='dash'>
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='content-side'>
        <Content />
      </div>
    </div>
  )
}

export default Dashboard