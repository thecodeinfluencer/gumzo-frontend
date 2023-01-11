import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChat, setOptionsOpen } from '../redux/slices/messagesSlice';
import Conversation from './Conversation';

export default function Conversations() {
  const dispatch = useDispatch();
  const state = useSelector(st => st);
  const { bots, activeChat } = state.messages;
  const activeBot = bots.find(bot => bot.id === activeChat);

  return (
    <div>
      <div
        style={{ top: 78, left: 0, right: 0 }}
        className='position-fixed w-100 d-lg-none mb-3 px-2'
      >
        <Conversation
          active
          avatar={activeBot?.avatar || ''}
          name={activeBot?.name || 'Select a bot'}
          desc={activeBot?.desc || 'Select a bot to start chatting'}
        />
      </div>
      <div className='d-none d-lg-block'>
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
