import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import App from './components/App/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter basename ="/goit-react-hw-06-phonebook/"> 
    <App />
    </BrowserRouter>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root'),
);
