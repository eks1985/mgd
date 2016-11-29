import React, { Component } from 'react';
import Page from 'material-ui/Paper';
import Models from './models';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {opened: false};
    this.categoryStyle = {
      display: 'flex',
      padding: '20px',
      height: '60px',
      cursor: 'pointer',
      justifyContent: 'center',
      width: '500px'
    }
    this.containerStyle = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '5px'
    }
    this.containerOpenStyle = {
      position: 'relative',
      display: 'flex',
      paddingTop: '0px',
      marginBottom: '5x',
      background: '#eee',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '5px',
    }
  }

  renderNav() {
    const style = {
      display: 'flex',
      position: 'absolute',
      top: '5px',
      right: '10px',
    }
    const linkStyle = {
      fontSize: '10px'
    }
    const linkContainerStyle = {
      marginLeft: '5px'
    }
    return (
      <div style={style}>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>Аксессуары</a>
        </div>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>Рекламные материалы</a>
        </div>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>Подробнее</a>
        </div>
      </div>
    );
  }

  render() {
    const { category, categoryGuid } =  this.props;

    return (
      <div style={this.state.opened ? this.containerOpenStyle : this.containerStyle}>
        <Page
          style={this.categoryStyle}
          key={categoryGuid}
          onClick={() => {
            this.setState({ opened: this.state.opened ? false : true })
          }}
          >
          {category[categoryGuid].descr}
        </Page>
        {this.state.opened &&
          <Models categoryGuid={categoryGuid} />
        }
        {this.state.opened && this.renderNav()}
      </div>
    );
  }

};
