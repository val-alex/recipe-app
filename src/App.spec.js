import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import store from "Store";

import { App } from "./App.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
