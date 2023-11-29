import './App.scss';
import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import FormUncontrolled from './components/FormUncontrolled/FormUncontrolled';
import FormControlled from './components/FormControlled/FormControlled';
import { Provider } from 'react-redux';
import appStore from './redux/store';

function App(): ReactNode {
  return (
    <div className="container">
      <BrowserRouter basename={'/'}>
        <Provider store={appStore}>
          <Routes>
            <Route index path={'/'} element={<Main />} />
            <Route path={'/uncontrol'} element={<FormUncontrolled />} />
            <Route path={'/control'} element={<FormControlled />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
