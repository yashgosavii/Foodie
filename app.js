// importing react and react-dom 

import React from 'react';
import ReactDOM from 'react-dom/client';

// creating a heading element

const heading = React.createElement('h1', {id: 'heading'}, "Hello World");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
