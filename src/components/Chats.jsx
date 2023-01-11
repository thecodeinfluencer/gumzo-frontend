import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chat from './Chat';
import Input from './Input';

export default function Chats() {
  const anchor = React.useRef(null);
  const state = useSelector(st => st);
  const { activeChat, loading } = state.messages;
  const chats = state.messages[activeChat];

  useEffect(() => {
    anchor.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats.length]);

  return (
    <div>
      <div
        className='d-flex flex-column align-items-start'
        style={{
          gap: 24,
          overflowY: 'auto',
          height: window.innerWidth > 992 && 'calc(100vh - 200px)',
        }}
      >
        {chats.map(({ owner, message }, index) => (
          <Chat key={index} message={message} local={owner === 'Human'} />
        ))}
        {!!loading && <Chat message='typing...' />}
        {chats.length < 1 && (
          <div className='text-white my-5 py-5 w-100 d-flex justify-content-center align-items-center flex-fill h-100'>
            Start a conversation
          </div>
        )}
        <div ref={anchor} className='w-100'></div>
      </div>
      <Input />
    </div>
  );
}
