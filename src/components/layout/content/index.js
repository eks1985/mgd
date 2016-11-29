import React from 'react';
import { connect } from 'react-redux';
import Catalog from './catalog';
import Orders from './orders';
import Messages from './messages';

const Content = ({
  content
}) => {
  const style = {
    display: 'flex',
    flex: '1 0 auto'
  }
  return (
    <div style={style}>
      { content === 'catalog' &&
        <div style={{display: 'flex', justifyContent: 'center', flex: '1'}}>
          <Catalog />
        </div>
      }
      { content === 'orders' && <Orders />}
      { content === 'messages' && <Messages />}
    </div>
  );
}

export default connect(
  state => ({ content: state.content })
)(Content);
