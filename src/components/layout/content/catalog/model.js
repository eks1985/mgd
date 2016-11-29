import React from 'react';
import { connect } from 'react-redux';

const Model = ({
  model,
  id,
  dispatch
}) => {
  const style = {
    display: 'flex',
    height: '100px',
    // cursor: 'pointer'
  }
  return (
    <div style={style}>
        <a href='#' onClick={() => {
            dispatch({'type': 'SET_CURRENT_MODEL', id: id});
            dispatch({type: 'SET_SLIDER1_ON'});
        }}>
            {model.descr}
        </a>
    </div>
  );
}

export default connect()(Model);
