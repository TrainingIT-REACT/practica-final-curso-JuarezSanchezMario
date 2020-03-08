import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../store"
import thunk from "redux-thunk";

// Componente
import Albums from '../Albums';
import Album from '../Albums';



describe("Albums", () => {
  const mockStore = configureStore([thunk]);
  
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Albums />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe("Album", () => {
  const mockStore = configureStore([thunk]);
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Album />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});