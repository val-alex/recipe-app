import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import store from "Store";

import { SearchPage } from "../SearchPage.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
