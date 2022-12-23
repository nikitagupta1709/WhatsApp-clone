import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css'
import { Login } from './modules/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId ="456039419633-h7dbhhj8e918f3e9n3d4dlbcuom2jpfn.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider>
  </React.StrictMode>
);