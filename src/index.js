import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import { store } from './components/redax/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename ="/goit-react-hw-06-phonebook/"> 
    <Provider store={store}>    
    <App />
    </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
