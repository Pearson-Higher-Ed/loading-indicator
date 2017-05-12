import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/component-specific.scss';
//import { LoadingSpinner } from '@pearson-components/compounds';


class ComponentOwner extends Component {

  constructor(props) {

    super(props);
    this.state = {
      containerHeight: 0,
      chipVertPos: 0
    };
  }

  componentDidMount() {
    const chipHeight = 70;
    const chipVertPos = Math.floor((ReactDOM.findDOMNode(this).parentNode.clientHeight - chipHeight) / 2);
    this.setState({
      containerHeight: ReactDOM.findDOMNode(this).parentNode.clientHeight,
      chipVertPos: chipVertPos
    });
    console.log(this.state.containerHeight + ' ' + this.state.chipVertPos);
  }

  render() {
    console.log('render invoked with ' + this.state.containerHeight + ' and ' + this.state.chipVertPos);
    const { appLevel, data } = this.props;
    const overlayStyle = appLevel ? 'pe-loadingIndicator-overlay pe-loadingIndicator-overlay-app' : 'pe-loadingIndicator-overlay';

    return (
      <div className="pe-loadingIndicator">
        <div className={overlayStyle} style={{height: this.state.containerHeight + 'px'}}>
          <div className="pe-loadingIndicator-chip" style={{top: this.state.chipVertPos}}>
            <div className="pe-loadingIndicator-spinner"></div>
            <div className="pe-loadingIndicator-chip-text">{data.text.chipText}</div>
          </div>
        </div>
      </div>
    )
  }

}


export default ComponentOwner;
