import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChat, setOptionsOpen } from '../redux/slices/messagesSlice';
import Conversation from './Conversation';

export default function Selector() {
  const dispatch = useDispatch();
  const state = useSelector(st => st);
  const { bots, activeChat } = state.messages;

  return (
    <div>
      <div
        className='w-100 d-flex flex-column align-items-center justify-content-center px-3 bg-default'
        style={{ height: '100vh' }}
      >
        <div
          className='d-flex flex-column align-items-center'
          style={{ gap: 16 }}
        >
          {bots.map(({ id, name, desc, avatar }, index) => (
            <Conversation
              key={index}
              avatar={avatar}
              name={name}
              desc={desc}
              active={id === activeChat}
              onClick={() => {
                dispatch(setActiveChat(id));
                dispatch(setOptionsOpen(false));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
