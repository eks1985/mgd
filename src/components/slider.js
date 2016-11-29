import React from 'react';
import { connect } from 'react-redux';
import Sets from './layout/content/catalog/set/sets';
import SetCard from './layout/content/catalog/set/set-card';
import SetSendOrder from './layout/content/catalog/set/set-send-order';

const Slider = ({
  slider,
  nr,
  dispatch
}) => {
  const styleOn = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '10000px',
      // bottom: -200,
      background: '#eee',
      transition: '0.2s ease-in-out'
    };
    const styleOff = {
      position: 'absolute',
      left: '100%',
      right: 0,
      top: 0,
      height: '10000px',
      // bottom: -200,
      background: '#eee',
      transition: '0.2s ease-in-out'
    };
  return (
    <div style={slider ? styleOn : styleOff} >
      {slider &&
        <div>
          <button
            onClick={
              () => {
                dispatch({
                  type: slider === true ? `SET_SLIDER${nr}_OFF` : `SET_SLIDER${nr}_ON`
                })
              }
            }
          >
              Назад
          </button>
        </div>
      }
      {nr === 1 && <Sets /> }
      {nr === 2 && <SetCard /> }
      {nr === 3 && <SetSendOrder /> }

    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    slider: state[`slider${ownProps.nr}`]
  }
}

export default connect(
  mapStateToProps
)(Slider);
