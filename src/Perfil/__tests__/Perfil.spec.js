import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../store";
import thunk from "redux-thunk";


// Componente
import Perfil from '../Perfil';

describe("Perfil", () => {
  const mockStore = configureStore([thunk]);
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Perfil />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});