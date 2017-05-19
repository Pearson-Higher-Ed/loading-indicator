import ReactDOM from 'react-dom';
import React    from 'react';

import { LoadingIndicator } from '../index';


document.body.addEventListener('o.initLoadingIndicator', e => {

  let domElement = document.body;
  if (e.detail.elementId !== 'body') {
    domElement = document.getElementById(e.detail.elementId);
  }

  console.log(domElement);

  ReactDOM.render(
    React.createElement(LoadingIndicator, e.detail.props, null)
    , domElement
  );
});
