import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import store from "store";

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
