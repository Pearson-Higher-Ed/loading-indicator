import ReactDOM from 'react-dom';
import React    from 'react';

import { LoadingIndicator } from '../index';


document.body.addEventListener('o.initLoadingIndicator', e => {

  const domElement = document.getElementById(e.detail.elementId);
  const domContent = domElement.innerHTML;

  e.detail.props.htmlString = domContent;

  ReactDOM.render(
    React.createElement(LoadingIndicator, e.detail.props, null)
    , domElement
  );
});
