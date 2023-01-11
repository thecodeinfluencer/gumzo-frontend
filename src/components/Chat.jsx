import React from 'react';

export default function Chat({ local, message }) {
  return (
    <div
      className={`d-flex flex-column align-items-${
        local ? 'start' : 'end'
      } flex-1 mb-2 gap-16 text-white w-100`}
    >
      <div
        style={{
          background: local ? '#11B1A5' : '#35383F',
          borderRadius: local ? '20px 8px 16px 20px' : `8px 20px 20px 16px`,
          padding: '12px 20px',
          whiteSpace: 'pre-wrap',
          maxWidth: '90%',
        }}
      >
        {message}
      </div>
    </div>
  );
}
