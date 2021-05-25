import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import store from "Store";

import { IngredientsForm } from "../IngredientsForm.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <IngredientsForm />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
