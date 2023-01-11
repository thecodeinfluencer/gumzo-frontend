import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/auth';
import smilies from '../assets/smileys.png';

export default function Navbar({ fixed }) {
  const { authUser, signOut } = useAuth();
  const navigate = useNavigate();
  const avatar =
    authUser?.photoURL ||
    `https://ui-avatars.com/api/?name=${authUser?.displayName}`;

  return (
    <nav
      style={{ background: '#35383F' }}
      className={`navbar py-2 ${fixed ? 'fixed-top' : ''}`}
    >
      <div className='container-fluid'>
        <div className='d-flex align-items-center navbar-brand text-white fw-bold'>
          <img
            style={{ width: 40, height: 40 }}
            src={authUser ? avatar : smilies}
            className={`me-2 ${authUser && 'rounded-circle '}`}
            alt='Logo'
          />
          <div className='h4 m-0'>
            {authUser ? authUser?.displayName : 'Gumzo AI'}
          </div>
        </div>
        <div className='d-flex justify-content-center text-center'>
          {!authUser && (
            <button
              onClick={() => navigate('/auth')}
              className='buttons login d-none d-md-flex  justify-content-center align-items-center px-2 py-2 me-2 px-4'
            >
              Sign In
            </button>
          )}
          {!authUser && (
            <button
              onClick={() => navigate('/auth')}
              className='buttons signup d-flex justify-content-center align-items-center px-2 py-2 mr-2 px-4'
            >
              Get Started
            </button>
          )}
          {authUser && (
            <button
              onClick={() => signOut()}
              className='buttons signup d-flex justify-content-center align-items-center px-2 py-2 mr-2 px-5'
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
