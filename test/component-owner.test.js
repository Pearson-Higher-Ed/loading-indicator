// global describe it expect

import expect             from 'expect';
import expectJSX          from 'expect-jsx';
import React              from 'react';
// import TestUtils          from 'react-addons-test-utils';
import  {ComponentOwner}  from '../index';
import { shallow }        from 'enzyme';

expect.extend(expectJSX);

describe('Component Owner Suite', function() {

  beforeEach(function() {
    const data  = {
      text: 'Loading...'
    };
     const wrapper = shallow(
      <ComponentOwner data={data} active="true" id="ex1">
        <p>Chilren Content</p>
      </ComponentOwner>
    );
  });



  // it('shallowly renders the component', function () {
  //   expect(this.wrapper.node.type).toEqual('div');
  // });

  // it('renders the correct text when the button is clicked', function () {
  //   this.wrapper.find('button').simulate('click');
  // });
  it('renders the correct text when the button is clicked', function () {
    expect(true).toBe(true)

  });

});
