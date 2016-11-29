import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/layout';
import Modal from './lib/modal/components/modal';
import ModalContent from './components/modal-content';
import Slider from './components/slider';
import { openAuth } from './actions/auth'
import { openAuthMedia } from './actions/auth-media'
// import { setCurrentContent } from './actions/current-content';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(openAuth());
    dispatch(openAuthMedia());
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
    return (
      <div className="App" style={style}>
        <Layout />
        <Modal
          handlerClose={
            () => {
              // setCurrentContent('goods')(this.props.dispatch);
            }
          }
        >
          <ModalContent />
        </Modal>
        {this.props.slider1 && <Slider nr={1} />}
        {this.props.slider2 && <Slider nr={2} />}
        {this.props.slider3 && <Slider nr={3} />}
      </div>
    );
  }
}

App = connect(
  state => ({slider1: state.slider1, slider2: state.slider2, slider3: state.slider3})
)(App);

export default App;
