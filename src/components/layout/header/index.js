import React from 'react';
import { connect } from 'react-redux';
// import Auth from './../../auth';
import Nav from './nav/index';

const Header = () => {
  const style = {
    display: 'flex',
    flex: '1 0 auto'
  }
  return (
    <div style={style}>
      <div style={{display: 'flex', flex: '0 0 50%'}}>
        <Nav />
      </div>
      <div style={{display: 'flex', flex: '0 0 50%'}}>
        {/* <Auth /> */}
      </div>
    </div>
  );
}

export default connect()(Header);
