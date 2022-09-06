import { IngredientsForm } from "@/components/IngredientsForm/ingredientsForm";
import { Home } from "@/pages/index";
import { RecipesResults } from "@/pages/recipes";
import { renderWithProviders } from "@/utils/test-utils";

describe("Home", () => {
  it("renders", () => {
    const result = renderWithProviders(<Home />);

    expect(result).toMatchSnapshot();
  });
});

describe("RecipesResults", () => {
  it("renders", () => {
    const result = renderWithProviders(<RecipesResults />);

    expect(result).toMatchSnapshot();
  });
});

describe("IngredientsForm", () => {
  it("renders", () => {
    const result = renderWithProviders(
      <IngredientsForm>
        <p>Hello World</p>
      </IngredientsForm>
    );

    expect(result).toMatchSnapshot();
  });
});
