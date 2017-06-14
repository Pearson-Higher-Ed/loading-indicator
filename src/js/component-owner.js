import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/component-specific.scss';
import { LoadingSpinner } from 'pearson-compounds';


class ComponentOwner extends Component {

  static propTypes = {
    active: PropTypes.string,
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

    this.toggleLoader = _toggleLoader.bind(this);

    document.body.addEventListener('o.LoadingIndicatorToggle.' + props.id, () => {
      this.toggleLoader();
    });
  }

  convertToJSX(htmlStr) {
    const htmlObj = {
      __html: htmlStr
    };
    // const overlaidContent = this.state.active === 'true' ? 'false' : 'true';

    return (
      <div dangerouslySetInnerHTML={htmlObj} aria-hidden={this.state.active}/>
    )
  }

  componentDidMount() {
    const chipHeight = 70;
    const windowVert = Math.floor((window.innerHeight - chipHeight) / 2);
    const chipVertPosWIN = (windowVert < 0) ? 0 : windowVert;
    const overlayHeight = ReactDOM.findDOMNode(this).parentNode.clientHeight;
    const chipVertPos = this.props.appLevel ? chipVertPosWIN : 0 - overlayHeight;


    this.setState({
      chipVertPos: chipVertPos
    });
  }

  render() {
    const { appLevel, children, data, htmlString } = this.props;
    const { active } = this.state;
    const overlayStyle = appLevel ? 'pe-loadingIndicator-overlay-app' : 'pe-loadingIndicator-overlay';
    const chipStyle = appLevel ? {marginTop: this.state.chipVertPos} : {top: this.state.chipVertPos};
    const activeStyle = active === 'true' ? '' : ' pe-loadingIndicator-overlay-inactive';
    const childrenContent = children ? (<div aria-hidden={this.state.active}>{children}</div>) : this.convertToJSX(htmlString);

    return (
      <div className="pe-loadingIndicator" aria-live="assertive">
        <div className={overlayStyle + activeStyle}>
          <div className="pe-loadingIndicator-chip" style={chipStyle}>
            <LoadingSpinner />
            <div className="pe-loadingIndicator-chip-text">{data.text.chipText}</div>
          </div>
        </div>
        {childrenContent}
      </div>
    )
  }

}


export default ComponentOwner;

export function _toggleLoader() {
  const newActive = this.state.active === 'true' ? 'false' : 'true';
  this.setState({ active: newActive });
};
