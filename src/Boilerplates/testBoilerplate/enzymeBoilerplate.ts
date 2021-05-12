const enzymeString = `import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../pages/index'

configure({ adapter: new Adapter() });

describe('React/Next unit tests', () => {
  describe('index.js without session', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<HomePage/>);
    });

    it('should render a main tag', () => {
      expect(wrapper.type()).toEqual('main');
    })

    it('should render two buttons', () => {
      expect(wrapper.find('button')).toHaveLength(2);
      expect(wrapper.find('button').at(0).text()).toEqual('Sign In');
      expect(wrapper.find('button').at(1).text()).toEqual('Sign Up');
    })

    it('should render an h1 tag', () => {
      expect(wrapper.find('h1')).toHaveLength(1);
      expect(wrapper.find('h1').text()).toEqual('Welcome to your UpNext Application Home Page!');
    })

    it('should render a p tag', () => {
      expect(wrapper.find('p')).toHaveLength(1);
      expect(wrapper.find('p').text()).toEqual('To edit this page, add to index.js in your pages directory.');
    })
  });
});
`;

export = enzymeString;
