import React from 'react';
import { render } from 'enzyme';

// Componente
import Session from '../Session';

describe(Session, () => {
  it('renders correctly', () => {
    const wrapper = render(<Session />);
    expect(wrapper).toMatchSnapshot();
  });
})
