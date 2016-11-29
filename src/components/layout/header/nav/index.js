import React from 'react';
import { connect } from 'react-redux';

const Nav = () => {
  const style = {
    display: 'flex'
  }
  return (
    <div style={style}>
      <a href="#">Каталог</a>
      {'  '}
      <a href="#">Заказы</a>
      {'  '}
      <a href="#">Сообщения</a>
    </div>
  );
}

export default connect()(Nav);
