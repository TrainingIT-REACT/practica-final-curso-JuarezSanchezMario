import React from 'react';
import { render } from 'enzyme';

// Componente
import Perfil from '../Perfil';

describe(Perfil, () => {
  it('renders correctly', () => {
    const wrapper = render(<Perfil />);
    expect(wrapper).toMatchSnapshot();
  });
})
