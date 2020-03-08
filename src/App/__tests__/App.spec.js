import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../store";
import thunk from "redux-thunk";


// Componente
import App from '../App';

describe("App", () => {
  const mockStore = configureStore([thunk]);
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});