import React from 'react';


const Content = () => {
  return (
  <>

  {/*=====================NAVBAR======================== */}
    <div className='content-dash'>
      <h2 className='text2'>Dashboard</h2>
      <div className='search-div'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <i class="ri-search-line"></i> 
        </div>          
     
      <i style={{marginTop: '1.5rem', color: '#000000',cursor:'pointer',  }} class="ri-notification-3-line"></i>
      <img src='https://lh3.googleusercontent.com/nJpMQsubpiBJ0sNYU2vbfJnQILcsAw06QemEucL3u_3u4oMUKxG2N8OWmrMTv1YVghZEwq2QxasZzwT1jos4qdDaMPQF43liYg=w1600-rj' 
      className='img'
      alt=''
      />
      </div>
    </div>

    {/*====================CUBES======================== */}
    <div className='cubes'>
      <div style={{backgroundColor: '#DDEFE0'}} className='cubes-div'>
        <i  class="ri-exchange-dollar-line icon"></i>
        <h5 className='h5'>Total Revenues</h5>
        <h2 className='h2'>$2,129,430</h2>
      </div>

      <div style={{backgroundColor: '#F4ECDD'}}  className='cubes-div' >
        <i  class="ri-bookmark-line m  icon"></i>
        <h5 className='h5'>Total Transactions</h5>
        <h2 className='h2'>1,520</h2>
      </div>

      <div style={{backgroundColor: '#EFDADA'}} className='cubes-div'>
        <i  class="ri-thumb-up-line  icon"></i>
        <h5 className='h5'>Total Likes</h5>
        <h2 className='h2'>9,721</h2>
      </div>

      <div style={{backgroundColor: '#DEE0EF'}}  className='cubes-div'>
        <i class="ri-user-3-line icon"></i>
        <h5 className='h5'>Total Users</h5>
        <h2 className='h2'>892</h2>
      </div>

    </div>

    </>
  )
}

export default Content;