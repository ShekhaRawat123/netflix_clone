import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App'; // Ensure the name matches exactly
// import Profile from './components/profile';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(  
    // <Profile/>
    <App/>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// main.jsx
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Practices } from './ Practices ';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(< Practices  />);

