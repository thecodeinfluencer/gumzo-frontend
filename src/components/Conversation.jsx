import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowDown from '../assets/arrow-down.png';
import { setOptionsOpen } from '../redux/slices/messagesSlice';

export default function Conversation({ active, name, desc, onClick, avatar }) {
  const dispatch = useDispatch();
  const state = useSelector(st => st);
  const { optionsOpen } = state.messages;

  return (
    <div
      onClick={onClick}
      className='d-flex justify-content-start align-items-ceter w-100'
      style={{
        background: '#1F222A',
        minHeight: 84,
        borderRadius: 16,
        gap: 16,
        padding: 10,
        border: `1px solid ${active ? '#11B1A5' : '#1F222A'}`,
        cursor: 'pointer',
      }}
    >
      <div
        className='d-flex justify-content-center align-items-center'
        style={{
          width: 64,
          height: 64,
          background: '#181A20',
          borderRadius: 32,
        }}
      >
        <img src={avatar} alt='' className='icon' />
      </div>
      <div className='text  w-100'>
        <p className='name d-block'>
          {name} {JSON.stringify(optionsOpen)}
        </p>
        <p className='desc'>{desc}</p>
      </div>
      {!optionsOpen && (
        <button
          className='d-flex d-lg-none justify-content-center align-items-center bg-theme iconify'
          style={{ borderRadius: 32 }}
          onClick={() => dispatch(setOptionsOpen(true))}
        >
          <img src={arrowDown} alt='' className='icon' />
        </button>
      )}
    </div>
  );
}
