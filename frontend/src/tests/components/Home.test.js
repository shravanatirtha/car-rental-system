import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../modules/app/components/Home';

it('Home renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});