import React from 'react';
import { connect } from 'react-redux';
const ModalContent = ({
  modal
}) => {
  return (
    <div>
      {/* {modal.content === 'profile' && <Profile />}
      {modal.content === 'help' && <Help />}
      {modal.content === 'goodsCard' && <GoodsCard />} */}
    </div>
  );
};

export default connect(
  // state => ({ modal: state.modal})
)(ModalContent);
