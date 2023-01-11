import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import product from '../assets/product.png';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { useAuth } from '../firebase/auth';

export default function Landing() {
  const navigate = useNavigate();
  const { isLoading, authUser } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) navigate('/chat');
  }, [authUser, isLoading, navigate]);

  if (isLoading || (!isLoading && !!authUser)) return <Loading />;

  return (
    <div className='page'>
      <div
        className='d-flex flex-column align-items-center'
        style={{ background: '#1F222A' }}
      >
        <div className='container-sm'>
          <Navbar />
          <div className='text-center text-white my-5 pt-4 text-center '>
            <h1 className='pb-3 mx-md-5 display-4 fw-bold'>
              Chat with Artificial Intelligence
            </h1>
            <h4>Test out different use cases for AI and chat with our bots.</h4>
          </div>
          <div
            style={{ marginBottom: 200 }}
            className='d-flex justify-content-center w-100 text-center pb-5'
          >
            <button
              onClick={() => navigate('/auth')}
              className='buttons signup d-flex justify-content-center align-items-center px-2 py-2 mr-2 px-4'
            >
              Try it now
            </button>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center mx-3 mx-md-5'>
        <div className='container-xs'>
          <img
            className='w-100'
            style={{ position: 'relative', top: -200, width: '50rem' }}
            src={product}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
