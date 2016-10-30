import React from 'react';
import MonthlyBook from '../MonthlyBook';
import renderer from 'react-test-renderer';
const books = require('../data/books-test.json');

test('MonthlyBook display', () => {
  const component = renderer.create(
    <MonthlyBook month={books[0]['month']} books={books[0]['books']}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // 是否具有某个类
  expect(tree.props.className).toMatch(/\bmonthly-book\b/);
});
