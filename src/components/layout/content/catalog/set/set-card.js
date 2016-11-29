import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import './styles.css';

class SetCard extends Component {

  componentDidMount() {
    scrollSpy.update();

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", to, element);
    });

  }

  createDescriptionMarkup() {
    return {'__html': '<p style="color: red">Some description here</p>'}
  }

  getSetJsx() {
    const { current, items } = this.props.sets;
    return (
      <div style={{padding: '10px'}}>
        {items[current].descr}
      </div>
    );
  }

  getNavJsx() {
    const { current} = this.props.sets;
    return (
      <div style={{padding: '10px'}}>
        <a href='#'>Каталог</a>
        {' - '}
        <a href='#'>Категории</a>
        {' - '}
        <a href='#'>Сеялки для пропашных культур</a>
        {' - '}
        <a href='#'>SP</a>
        {' - '}
        <a href='#'>Конфигурации</a>
        {' - '}
        <a href='#'>{current}</a>
      </div>
    );
  }

  getLocalNavJsx() {
    return (
      <div style={{display: 'flex'}}>
        <div className='setCardNavigation' style={{flex: '0 0 250px', padding: '10px'}}>
          <div style={{position: 'fixed'}}>
            <div>
              <button><Link activeClass="active-pane" to="desc" spy={true} smooth={true} duration={500} >Описание</Link></button>
            </div>
            <div>
              <button><Link activeClass="active-pane" to="compl" spy={true} smooth={true} duration={500} >Комплектация</Link></button>
            </div>
            <div>
              <button><Link activeClass="active-pane" to="photo" spy={true} smooth={true} duration={500} >Фото</Link></button>
            </div>
            <div>
              <button><Link activeClass="active-pane" to="tech" spy={true} smooth={true} duration={500} >Тех характеристики</Link></button>
            </div>
            <div>
              <button><Link activeClass="active-pane" to="access" spy={true} smooth={true} duration={500} >Аксессуары</Link></button>
            </div>
          </div>

        </div>
        <div className='setCardContent' style={{flex: '1 0 auto', display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', minHeight: '50vh'}}>
            <Element name='desc'>
              <div dangerouslySetInnerHTML={this.createDescriptionMarkup()} ></div>
            </Element>
          </div>
          <div style={{display: 'flex', minHeight: '50vh'}}>
            <Element name='compl'>
              Комплектация
            </Element>
          </div>
          <div style={{display: 'flex', minHeight: '50vh'}}>
            <Element name='photo'>
              Фото
            </Element>
          </div>
          <div style={{display: 'flex', minHeight: '50vh'}}>
            <Element name='tech'>
              Тех характеристики
            </Element>
          </div>
          <div style={{display: 'flex', minHeight: '50vh'}}>
            <Element name='access'>
              Аксессуары
            </Element>
          </div>
        </div>
      </div>
    );
  }

  getSavePresentationJsx() {
    return (
      <div style={{position: 'absolute', top: '10px', right: '10px'}}>
        <button>
          Сохранить в виде презентации
        </button>
      </div>
    );
  }

  render() {
    const { current } = this.props.sets;
    return (
      <div>
        {current &&
          <div>
            <div>
              {this.getNavJsx()}
            </div>
            <div>
              {this.getSetJsx()}
              {this.getSavePresentationJsx()}
              {this.getLocalNavJsx()}
            </div>
          </div>
        }
      </div>
    );
  }


}

export default connect(
  state => ({sets: state.sets})
)(SetCard);
