import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    height: '100vh'
  }
  return (
    <div className='layout' style={style}>
      <div style={{display: 'flex', flex: '0 0 60px', border: '1px solid gray'}}>
        <Header />
      </div>
      <div style={{display: 'flex', flex: '1 0 auto', border: '1px solid gray'}}>
        <Content />
      </div>
      <div style={{display: 'flex', flex: '0 0 60px', border: '1px solid gray'}}>
        <Footer />
      </div>
    </div>
  );
};
