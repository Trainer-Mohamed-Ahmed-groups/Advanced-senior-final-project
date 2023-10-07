import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from "./locale/en.json";
import translateAr from "./locale/ar.json";
import { Provider } from 'react-redux';
import store from "./redux/store"

const resources = {
  en: {
    translation: translateEn
  },
  ar: {
    translation: translateAr
  }
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

