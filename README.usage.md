# Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install @pearson-components/LoadingIndicator --save

## External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Cross-browser Compatibility

The following [Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) service is recommended for consuming this
component cross-browser:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

The CustomEvent polyfill is for Internet Explorer, and the Intl.js polyfill is for Safari. As you support more languages,
add them to the list of features requested.

If your browser already supports a feature, this service automatically optimizes and does not bring down unnecessary code.

## How to Consume in an Application

See the /demo directory for example usage.

The transpiled, minified bundle will be available in /node_modules/@pearson-components in the component
/build directory after you have npm installed this component in your project.

This component can be consumed as an out of the box ReactJS component, or when used with an event listener, instantiated
within a non-React application (though a React render call will be needed).

Eventing example:

```js
import ReactDOM from 'react-dom';
import React    from 'react';
import { LoadingIndicator } from '@pearson-components/LoadingIndicator';

document.body.addEventListener('o.initLoadingIndicator', e => {

  const domElement = document.getElementById(e.detail.elementId);
  const domContent = domElement.innerHTML;

  e.detail.props.htmlString = domContent;

  ReactDOM.render(
    React.createElement(LoadingIndicator, e.detail.props, null)
    , domElement
  );
});

...

const config = {
  detail: {
    elementId: 'domElementId',
    props: {
      id: "id1",
      active: 'true',
      data: {
        text: {
          chipText: 'Loading'
        }
      }
    }
  }
};

document.body.dispatchEvent(new CustomEvent('o.initLoadingIndicator', config));
```

For the eventing method, it is important to note that the HTML content to be overlaid by the loading indicator needs to be
passed into the component when it is rendered.  If the HTML content to be overlaid isn't passed in prior to the render method
call, the loading indicator will display in the area denoted by the elementId attribute, but the content will disappear.

ReactJS:

```js
import { LoadingIndicator } from '@pearson-components/LoadingIndicator';

// in render method
// add text to config data...
const data  = {
  text: {
    chipText: 'Loading'
  }
};

return (
  <LoadingIndicator data={data} active="true" id="ex1">
    {props.children}
  </LoadingIndicator>
)
```
In this instance, props.children contain the HTML content to be overlaid while the loader is active.

### Toggling LoadingIndicator

When the Loading Indicator is initialized, an event listener is created that will toggle the loading indicator
on and off.  This example assumes that an id of 'ex1' was passed in as a property when the loading indicator was
instantiated.  ReactJS apps can simply pass "true" or "false" into the active attribute or use the event listener.

```js
document.body.dispatchEvent(new CustomEvent('o.LoadingIndicatorToggle.ex1'));
```

### Component Configuration

| **Option** | **Type (Default)** |**Description**|
|----------|-------|---|
| id | String | Required.  A string which will uniquely identify a loading indicator and create events according to this value |
| active | String | Either "true" or "false".  If "true", the loading indicator will be active. |
| data.text.chipText | String | The string that will appear in the loading indicator chip. |
| htmlString | String (optional) | Used only when overlaid HTML content needs to be passed into the component as a property. |

### Eventing

| **Event** | **Detail**|
|----------|-------|
| o.LoadingIndicatorToggle.{id} | Event listener for a specific loading indicator instance which turns the loading indicator on and off. |
