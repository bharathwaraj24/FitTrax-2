import React from "react";
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(<App />, document.getElementById('root'));

root.render(
    <React.StrictMode>
     <App />
    </React.StrictMode>
);