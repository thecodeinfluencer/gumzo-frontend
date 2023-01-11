import { auth as firebaseUiAuth } from 'firebaseui';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import smileys from '../assets/smileys.png';
import Loading from '../components/Loading';
import { useAuth } from '../firebase/auth';
import { auth, uiConfig } from '../firebase/firebase';

export default function Signin() {
  const { isLoading, authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && authUser) navigate('/chat');
  }, [authUser, isLoading, navigate]);

  useEffect(() => {
    var ui =
      firebaseUiAuth.AuthUI.getInstance() || new firebaseUiAuth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  if (isLoading || (!isLoading && !!authUser)) return <Loading />;

  return (
    <div className='page d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex align-items-center navbar-brand text-white fw-bold mb-3'>
        <img
          src={smileys}
          className='d-inline-block align-text-top me-2'
          alt='Logo'
          width='40'
          height='40'
        />
        <span className='h4'>Gumzo AI</span>
      </div>
      <div id='firebaseui-auth-container'></div>
    </div>
  );
}
