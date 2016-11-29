import React from 'react';
import { connect } from 'react-redux';

const SetRow =({
  set,
  setId,
  //actions
  dispatch
}) => {
  return (
    <div>
      <a
        href='#'
        onClick={
          () => {
            dispatch({type: 'SET_SLIDER2_ON'});
            dispatch({type: 'SET_SET_CURRENT', id: setId});
          }
        }
      >
        {set.descr}
      </a>
      <button
        onClick={
          () => {
            dispatch({type: 'SET_SLIDER2_ON'});
            dispatch({type: 'SET_SET_CURRENT', id: setId});
          }
        }
      >
        Характеристики
      </button>
      <button
      onClick={
        () => {
          dispatch({type: 'SET_SLIDER3_ON'});
          dispatch({type: 'SET_SET_CURRENT', id: setId});
        }
      }
      >
        Заказать
      </button>
    </div>
  );
}

export default connect()(SetRow);
