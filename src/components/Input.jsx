import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePostListDataMutation } from '../api/apiSlice';
import send from '../assets/direct-right.png';
import { addMessage, setLoading } from '../redux/slices/messagesSlice';

export default function Input() {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(st => st);
  const { activeChat } = state.messages;
  const chats = state.messages[activeChat];

  const [sendChat, { isLoading }] = usePostListDataMutation();

  return (
    <div
      className='d-flex align-items-center w-100 position-fixed'
      style={{ bottom: 0, left: 0, right: 0 }}
    >
      <div className='container'>
        <div className='row py-2 py-lg-4' style={{ background: '#181A20' }}>
          <div className='col-sm-12 col-md-12 col-lg-4'></div>
          <div className='col-sm-12 col-md-12 col-lg-8'>
            <div className='d-flex align-items-center' style={{ gap: 12 }}>
              <input
                style={{
                  background: '#35383F',
                  border: '1px solid #11B1A5',
                  borderRadius: 10,
                  padding: '16px 32px',
                  color: '#fff',
                }}
                value={message}
                onChange={e => setMessage(e.target.value)}
                type='text'
                placeholder='Type a message'
                className='flex-fill'
              />
              <button
                style={{
                  width: 56,
                  height: 56,
                  background: isLoading ? '#ddd' : '#11B1A5',
                  borderRadius: '50%',
                  border: 'none',
                }}
                disabled={isLoading}
                className='d-flex align-items-center justify-content-center'
                onClick={async () => {
                  if (message.trim() === '') return;
                  dispatch(
                    addMessage({ bot: activeChat, owner: 'Human', message })
                  );
                  setMessage('');

                  dispatch(setLoading(true));

                  const { data, error } = await sendChat({
                    url: `/chat/${activeChat}`,
                    body: {
                      conversation: [
                        ...chats,
                        { owner: 'Human', message: message },
                      ],
                    },
                  });

                  if (error) {
                    console.log(error);
                    dispatch(
                      addMessage({
                        bot: activeChat,
                        owner: 'AI',
                        message: 'Sorry, something went wrong. Try again?',
                      })
                    );
                    dispatch(setLoading(false));
                  }

                  if (data.message) {
                    dispatch(
                      addMessage({
                        bot: activeChat,
                        owner: 'AI',
                        message: data.message,
                      })
                    );
                  }

                  dispatch(setLoading(false));
                }}
              >
                <img src={send} alt='' className='icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
