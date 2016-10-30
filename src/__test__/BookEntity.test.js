import React from 'react';
import BookEntity from '../BookEntity';
import renderer from 'react-test-renderer';
const books = require('../data/books-test.json');

test('BookEntity display', () => {
  const component = renderer.create(
    <BookEntity book={books[0]['books'][0]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // 是否具有某个类
  expect(tree.props.className).toMatch(/\bbook-entity\b/);
});
