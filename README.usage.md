# Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install @pearson-components/[component-name] --save

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

This component can be consumed as an out of the box ReactJS component, or when used with an event listner, instantiated
within a non-React application (though a React render call will be needed).

Eventing example:

```js
[EVENTING EXAMPLE GOES HERE]
```

Direct API example:

```js
[DIRECT API EXAMPLE GOES HERE]
```

### Component Configuration

| **Option** | **Type (Default)** |**Description**|
|----------|-------|---|
| id | String | Required.  A string which will uniquely identify a loading indicator and create events according to this value |
| active | String | Either "true" or "false".  If "true", the loading indicator will be active. |
| data.text.chipText | String | The string that will appear in the loading indicator chip. |

### Eventing

| **Event** | **Detail**|
|----------|-------|---|
| o.LoadingIndicatorToggle.{id} | Event listener for a specific loading indicator instance which turns the loading indicator on and off. |
