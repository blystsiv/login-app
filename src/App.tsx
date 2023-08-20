import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './index';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App homepage="/" />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
