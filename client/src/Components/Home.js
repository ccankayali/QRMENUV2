import React from 'react';
import '../Design/HomeLoading.css'
import '../Design/App.css'

const Loading = () => {
  return (
    <div className="log-screen">
      <div className="all-log-screen">
        <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className='log-logo' />
        <div className='log-text'>
          <h1 className='log-welcome'>Hoş Geldiniz!</h1>
          <p className='log-p'>Sol taraftan menü seçebilirsiniz</p>
        </div>
      </div>
        
    </div>
  );
};

export default Loading;