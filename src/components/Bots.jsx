import React from 'react';
import Chats from './Chats';
import Conversations from './Conversations';
import Navbar from './Navbar';

export default function Bots() {
  return (
    <div className='page'>
      <div className='container pt-3'>
        <Navbar fixed />
        <div className='row mt-5 py-5' style={{ background: '#181A20' }}>
          <div className='d-lg-none w-100 mt-5 mb-4'></div>
          <div className='col-sm-12 col-md-12 col-lg-4'>
            <Conversations />
          </div>
          <div className='col-sm-12 col-md-12 col-lg-8'>
            <Chats />
          </div>
        </div>
      </div>
    </div>
  );
}
