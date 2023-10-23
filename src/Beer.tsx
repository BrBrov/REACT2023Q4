import {Component, ReactElement} from 'react';

import './Beer.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

class Beer extends Component {
  public render(): ReactElement {
    return (
      <>
        <div className='beer__container'>
          <Header />
          <Main />
        </div>
      </>
    );
  }
}

export default Beer;
