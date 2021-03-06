import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../store"

// Componente
import Home from '../Home';

describe("Home", () => {
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});