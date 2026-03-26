// import react
import React from 'react';

// import ReactDom -> connects react to the actual browser DOM.
import ReactDOM from 'react-dom/client';

// import main component -> App.tsx (then <App /> renders the entire site.)
import App from './App';

// import global css file
import './components/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
