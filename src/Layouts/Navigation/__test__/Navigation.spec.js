import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import store from "Store";

import { Navigation } from "../Navigation.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
