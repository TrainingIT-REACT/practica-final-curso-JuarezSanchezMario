import React from 'react';
import { render } from 'enzyme';

// Componente
import Home from '../Home';

describe(Home, () => {
  it('renders correctly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
})
