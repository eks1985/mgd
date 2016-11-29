import React from 'react';
import { connect } from 'react-redux';

const SetSendOrder = ({
  sets
}) => {
  const { current } = sets;
  return (
    <div>
    { current &&
      <div>
        <div>
          Отравка заказа
        </div>
        <button>
          Отправить заказ
        </button>
      </div>
    }
    </div>
  );
}

export default connect(
  state => ({sets: state.sets})
)(SetSendOrder);
