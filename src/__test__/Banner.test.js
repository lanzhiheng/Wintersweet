import Banner from '../Banner';
import renderer from 'react-test-renderer';
import React from 'react';

test('Banner exist', () => {
  const component = renderer.create(
    <Banner />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
