import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../scss/component-specific.scss';
import { LoadingSpinner } from 'pearson-compounds';
import ally from 'ally.js';


class ComponentOwner extends Component {

  static propTypes = {
    active: PropTypes.string,
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      text: PropTypes.shape({
        chipText: PropTypes.string.isRequired
      })
    })
  };

  constructor(props) {

    super(props);
    this.state = {
      active: props.active,
      chipVertPos: 0
    };

    this.toggleLoader = this.toggleLoader.bind(this);
    this.toggleTabbableItems = this.toggleTabbableItems.bind(this);
  }

  convertToJSX(htmlStr) {
    const htmlObj = {
      __html: htmlStr
    };

    return (
      <div
        dangerouslySetInnerHTML={htmlObj}
        className={`loadingIndicatorContent-${this.props.id}`}
        aria-hidden={this.state.active}
      />
    );
  }

  toggleLoader() {
    const newActive = this.state.active === 'true' ? 'false' : 'true';
    this.setState({
      active: newActive,
      tabElements: this.toggleTabbableItems(newActive)
    });
  };

  toggleTabbableItems(newActive) {
    const tabElementArr = this.state.tabElements;
    for (let i = 0; i < tabElementArr.length; i++) {
      tabElementArr[i].tabIndex = newActive === 'false' ? 0 : -1;
    }
    return tabElementArr;
  }

  componentDidMount() {
    const chipHeight = 70;
    const windowVert = Math.floor((window.innerHeight - chipHeight) / 2);
    const chipVertPosWIN = (windowVert < 0) ? 0 : windowVert;
    const overlayHeight = ReactDOM.findDOMNode(this).parentNode.clientHeight;
    const chipVertPos = this.props.appLevel ? chipVertPosWIN : 0 - overlayHeight;
    const tabbableConfig = this.props.appLevel ? { context: 'body' } : { context: `.loadingIndicatorContent-${this.props.id}` };
    const tabElements = ally.query.tabbable(tabbableConfig);

    if (this.state.active) {
      for (let i = 0; i < tabElements.length; i++) {
        tabElements[i].tabIndex = -1;
      }
    }

    document.body.addEventListener(`o.LoadingIndicatorToggle.${this.props.id}`, () => {
      this.toggleLoader();
    });

    this.setState({
      chipVertPos,
      tabElements
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.state.active) {
      this.setState({ active: nextProps.active });
    }
  }

  render() {
    const { appLevel, children, data, htmlString, id } = this.props;
    const { active, chipVertPos } = this.state;
    const overlayStyle = appLevel ? 'pe-loadingIndicator-overlay-app' : 'pe-loadingIndicator-overlay';
    const chipStyle = appLevel ? {marginTop: chipVertPos} : {top: chipVertPos};
    const activeStyle = active === 'true' ? '' : ' pe-loadingIndicator-overlay-inactive';
    const childrenContent = children ? (<div aria-hidden={active} className={`loadingIndicatorContent-${id}`}>{children}</div>) : this.convertToJSX(htmlString);
    const chipTextWidth = data.text.chipText.length > 20 ? {width: 140} : {};

    return (
      <div className="pe-loadingIndicator">
        <div className={overlayStyle + activeStyle}>
          <div className="pe-loadingIndicator-chip" style={chipStyle}>
            <LoadingSpinner />
            <div className="pe-loadingIndicator-chip-text" style={chipTextWidth}>{data.text.chipText}</div>
          </div>
        </div>
        <div aria-live="polite" aria-busy={active}>
          {childrenContent}
        </div>
      </div>
    )
  }

}


export default ComponentOwner;
