import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/component-specific.scss';
//import { LoadingSpinner } from '@pearson-components/compounds';


class ComponentOwner extends Component {

  constructor(props) {

    super(props);
    this.state = {
      containerHeight: 0,
      chipVertPos: 0,
      overlay: {
        overlayOffset: 0,
        overlayHeight: 0
      }
    };
  }

  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this).parentNode);
    const chipHeight = 70;
    const overlayOffset = ReactDOM.findDOMNode(this).parentNode.offsetHeight;
    // const parentVert = Math.floor((parentHeight - chipHeight) / 2);
    const windowVert = Math.floor((window.innerHeight - chipHeight) / 2);
    // const chipVertPosDOM = (parentVert < 0) ? 0 : parentVert;
    const chipVertPosWIN = (windowVert < 0) ? 0 : windowVert;
    // const chipVertPosChildOffset = ReactDOM.findDOMNode(this).childNodes[0].clientHeight;
    const chipVertPos = this.props.appLevel ? chipVertPosWIN : 0 - overlayHeight;
    const overlayHeight = ReactDOM.findDOMNode(this).parentNode.clientHeight;

    

    this.setState({
      containerHeight: ReactDOM.findDOMNode(this).parentNode.clientHeight,
      chipVertPos: chipVertPos,
      overlay: {
        overlayOffset: overlayOffset,
        overlayHeight: overlayHeight
      }
    });
  }

  render() {
    const { appLevel, children, data } = this.props;
    const overlayStyle = appLevel ? 'pe-loadingIndicator-overlay-app' : 'pe-loadingIndicator-overlay';

    return (
      <div className="pe-loadingIndicator">
        <div className={overlayStyle}>
          <div className="pe-loadingIndicator-chip" style={{top: this.state.chipVertPos}}>
            <div className="pe-loadingIndicator-spinner"></div>
            <div className="pe-loadingIndicator-chip-text">{data.text.chipText}</div>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }

}


export default ComponentOwner;
