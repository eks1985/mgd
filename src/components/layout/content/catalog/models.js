import React from 'react';
import { connect } from 'react-redux';
import { getModelsIdsByCategory } from './../../../../store/reducers/models';
import Model from './model';
import Paper from 'material-ui/Paper';

const Models = ({
  categoryGuid,
  models,
  modelsIdsByCategory
}) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100%',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  }
  const modelStyle = {
    display: 'flex',
    flex: '0 0 100px',
    padding: '5px',
    fontSize: '12px',
    marginTop: '5px',
    marginRight: '5px',
  }
  return (
    <div style={style}>
      {
        modelsIdsByCategory.map(id => {
          return (
            <Paper style={modelStyle} key={id} >
              <Model model={models[id]} id={id} />
            </Paper>
          );
        })
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
     models: state.models.items,
     modelsIdsByCategory: getModelsIdsByCategory(state.models.items, ownProps.categoryGuid)
  }
}

export default connect(
  mapStateToProps
)(Models);
