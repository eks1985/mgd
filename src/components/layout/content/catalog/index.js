import React from 'react';
import { connect } from 'react-redux';
import Category from './category';
// import Page from 'material-ui/Paper';
import SetPhotos from './set/set-photos';

const Catalog = ({
  category
}) => {
  const photos = {id1: "1", id2: "2", id3: "3"};
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1'
    // alignItems: 'center'
  }
  const keys = Object.keys(category);
  return (
    <div style={style}>
      {
        keys.map(key => {
          return (
            <Category categoryGuid={key} key={key} category={category} />
          );
        })
      }
      <div style={{display: 'flex', flex: '0 0 80%', flexDirection: 'column'}}>
        <SetPhotos photos={photos}/>
      </div>
    </div>
  );
}

export default connect(
  state => ({ category: state.category})
)(Catalog);
