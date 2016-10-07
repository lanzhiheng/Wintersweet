import Content from '../Content';
import renderer from 'react-test-renderer';
import React from 'react';

test('Banner exist', () => {
  const component = renderer.create(
    <Content />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
