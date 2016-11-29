import React from 'react';
import { connect } from 'react-redux';

const Photos = ({
  photos
}) => {
  const containerStyle = {
    display: 'flex',
    minHeight: '300px',
    width: '80%'
  }
  const leftStyle = {
    display: 'flex',
    flex: '0 0 60%',
    border: '1px solid #ddd',
    padding: '10px'
  }
  const rightStyle = {
    display: 'flex',
    flex: '0 0 40%',
    border: '1px solid goldenrod',
    padding: '10px'
  }
  const itemStyle = {
    display: 'flex',
    width: '120px',
    minHeight: '100px',
    padding: '3px',
    border: '1px solid #eee'
  }
  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={{border: '1px solid #ccc', height: '100%', width: '100%'}}>

        </div>
      </div>
      <div style={rightStyle}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div style={itemStyle}>1</div>
          <div style={itemStyle}>2</div>
          <div style={itemStyle}>3</div>
          <div style={itemStyle}>4</div>
          <div style={itemStyle}>5</div>
          <div style={itemStyle}>6</div>
          <div style={itemStyle}>7</div>
          <div style={itemStyle}>8</div>
          <div style={itemStyle}>9</div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Photos);
