import ReactDOM from 'react-dom';
import React    from 'react';

import { LoadingIndicator } from '../index';


document.body.addEventListener('o.initLoadingIndicator', e => {

  let domElement = document.body;
  let domContent = domElement.innerHTML;
  if (e.detail.elementId !== 'body') {
    domElement = document.getElementById(e.detail.elementId);
    domContent = domElement.innerHTML;
  }
  console.log(domElement);

  e.detail.props.htmlString = domContent.innerHTML;

  ReactDOM.render(
    React.createElement(LoadingIndicator, e.detail.props, null)
    , domElement
  );
});
