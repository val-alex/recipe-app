import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import store from "Store";

import { ResultsPage } from "../ResultsPage.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ResultsPage />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
