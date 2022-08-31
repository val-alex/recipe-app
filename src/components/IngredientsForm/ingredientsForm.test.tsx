import renderer from "react-test-renderer";
import IngredientsForm from ".";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <IngredientsForm>
        <p>Hello World </p>
      </IngredientsForm>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
