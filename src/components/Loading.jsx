import React from 'react';

export default function Loading() {
  return (
    <div className='page d-flex align-items-center justify-content-center'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
