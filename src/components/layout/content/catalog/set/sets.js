import React from 'react';
import { connect } from 'react-redux';
import { getSetsIdsByModel } from './../../../../../store/reducers/sets';
import SetRow from './set-row';

const Sets = ({
  modelDescr,
  sets,
  setsIdsByModel
}) => {
  const getListJsx = () => {
    return setsIdsByModel.map(key => {
      return (
        <SetRow set={sets[key]} key={key} setId={key} />
      );
    });
  }
  const getNavJsx =() => {
    return (
      <div style={{padding: '10px'}}>
        <a href='#'>Каталог</a>
        {' - '}
        <a href='#'>Категории</a>
        {' - '}
        <a href='#'>Сеялки для пропашных культур</a>
        {' - '}
        <a href='#'>{`Конфигурации модели ${modelDescr}`}</a>
      </div>
    );
  }

  return (
    <div>
      {getNavJsx()}
      {getListJsx()}
    </div>
  );
}

export default connect(
  state => ({
    sets: state.sets.items,
    setsIdsByModel: getSetsIdsByModel(state.sets.items, state.models.current),
    modelDescr: state.models.current ? state.models.items[state.models.current].descr : ''
  })
)(Sets);
