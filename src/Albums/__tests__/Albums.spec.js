import React from 'react';
import { render } from 'enzyme';

// Componente
import Albums from '../Albums';

describe(Albums, () => {
  it('renders correctly', () => {
    const wrapper = render(<Albums />);
    expect(wrapper).toMatchSnapshot();
  });
})
