import { IngredientsForm } from "@/components/IngredientsForm/ingredientsForm";
import { Home } from "@/pages/index";
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
