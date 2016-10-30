import React from 'react';
import MonthlyBook from '../MonthlyBook';
import renderer from 'react-test-renderer';

test('MonthlyBook display', () => {
  const component = renderer.create(
    <MonthlyBook />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // 是否具有某个类
  expect(tree.props.className).toMatch(/\bmonthly-book\b/);
});
