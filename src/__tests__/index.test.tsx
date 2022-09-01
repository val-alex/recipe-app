import { IngredientsForm } from "@/components/IngredientsForm/ingredientsForm";
import { Home } from "@/pages/index";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "@/utils/test-utils";

describe("Home", () => {
  it("renders", () => {
    const result = renderWithProviders(<Home />);

    expect(result).toMatchSnapshot();
  });
});

describe("IngredientsForm", () => {
  it("renders", () => {
    const result = renderWithProviders(
      <IngredientsForm>
        <p>Hell World</p>
      </IngredientsForm>
    );

    expect(result).toMatchSnapshot();
  });
});
