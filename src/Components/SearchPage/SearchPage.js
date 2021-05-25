import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectRecipesRecentSearches } from "Store/Reducers/recipesSlice";

import IngredientsForm from "Components/Forms/ingredientsForm/IngredientsForm";

export const SearchPage = () => {
  const recipesRecentSearches = useSelector(selectRecipesRecentSearches);

  return (
    <IngredientsForm>
      {recipesRecentSearches.length > 0 ? (
        <div>
          <h4>Recent Searches:</h4>
          <ol>
            {recipesRecentSearches.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </IngredientsForm>
  );
};

SearchPage.propTypes = {
  previousSearches: PropTypes.array,
};

SearchPage.defaultProps = {
  previousSearches: [],
};

export default SearchPage;
