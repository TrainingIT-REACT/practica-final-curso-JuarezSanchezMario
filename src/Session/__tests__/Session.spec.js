import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../store";
import { Router } from "react-router-dom";
import thunk from "redux-thunk";
import history from "../../App/history";

// Componente
import Session from "../Session";

describe("Session", () => {

  let store, wrapper;
const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <Session />
        </Router>
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
