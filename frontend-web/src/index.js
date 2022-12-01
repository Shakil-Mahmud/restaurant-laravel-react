import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import { fetchCategories } from './Redux/Features/categoriesSlice';
import { getItemByCategory } from './Redux/Features/itemsSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchCategories());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
