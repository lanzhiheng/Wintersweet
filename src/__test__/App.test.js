import React from 'react';
import App from '../App';
import MonthlyBook from '../MonthlyBook';
import {shallow, mount} from 'enzyme';
const books = require('../data/books-test.json');

describe('<App />', () => {
  it('render three <MonthlyBook />', function() {
    const wrapper = shallow(
      <App books={books} />
    );
    var monthlyBook = wrapper.find('.monthly-book');
    expect(monthlyBook.root.node.props.children.length).toBe(3);
  });

});
