// global describe it expect

import expect                from 'expect';
import expectJSX             from 'expect-jsx';
import React                 from 'react';
import TestUtils             from 'react-addons-test-utils';
import { LoadingIndicator }  from '../index';
import { shallow }           from 'enzyme';

expect.extend(expectJSX);
describe('Loading Indicator Suite (loader on portion of screen)', function() {

  beforeEach(function() {
    const data  = {
      text: {
        chipText: 'Loading...'
      }
    };
    this.wrapper = shallow(
      <LoadingIndicator data={data} active="true" id="ex1">
        <p>Children Content</p>
      </LoadingIndicator>
    );
  });

  it('shallowly renders the component', function () {
    expect(this.wrapper.node.type).toEqual('div');
  });

  it('renders the correct text in loading chip', function () {
    const testObj = this.wrapper.nodes[0].props.children[0].props.children.props.children[1].props;
    expect(testObj.className).toEqual('pe-loadingIndicator-chip-text');
    expect(testObj.children).toEqual('Loading...');
  });

  it('renders the overlaid content', function () {
    const testStr = this.wrapper.nodes[0].props.children[1].props.children.props.children.type;
    expect(testStr).toEqual('p');
  });

});

describe('Loading Indicator Suite (full screen loader)', function() {

  beforeEach(function() {
    const data  = {
      text: {
        chipText: 'Loading...'
      }
    };
    this.wrapper = shallow(
      <LoadingIndicator data={data} active="true" id="ex1" appLevel={true}>
        <p>Children Content</p>
      </LoadingIndicator>
    );
  });

  it('shallowly renders the component', function () {
    expect(this.wrapper.node.type).toEqual('div');
  });

  it('renders the correct text in loading chip', function () {
    const testObj = this.wrapper.nodes[0].props.children[0].props.children.props.children[1].props;
    expect(testObj.className).toEqual('pe-loadingIndicator-chip-text');
    expect(testObj.children).toEqual('Loading...');
  });

  it('renders the overlaid content', function () {
    const testStr = this.wrapper.nodes[0].props.children[1].props.children.props.children.type;
    expect(testStr).toEqual('p');
  });

});

describe('Loading Indicator Suite (loader off to start, children as props)', function() {

  beforeEach(function() {
    const data  = {
      text: {
        chipText: 'Loading...'
      }
    };
    this.wrapper = shallow(
      <LoadingIndicator
        data={data}
        active="false"
        id="ex1"
        htmlString="<p>Children Content</p>"
      />
    );
  });

  it('shallowly renders the component', function () {
    expect(this.wrapper.node.type).toEqual('div');
  });

  it('renders the correct text in loading chip', function () {
    const testObj = this.wrapper.nodes[0].props.children[0].props.children.props.children[1].props;
    expect(testObj.className).toEqual('pe-loadingIndicator-chip-text');
    expect(testObj.children).toEqual('Loading...');
  });

  it('renders the overlaid content', function () {
    const testStr = this.wrapper.nodes[0].props.children[1].props.children.props.dangerouslySetInnerHTML.__html;
    expect(testStr).toEqual('<p>Children Content</p>');
  });

});
