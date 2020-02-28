import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { requestRecipes } from "Store/Actions/actions";

import IngredientsForm from "Components/Forms/ingredientsForm/IngredientsForm";

const mapStateToProps = state => ({
  previousSearches: state.recipes.recentSearches || []
});

const mapDispatchToProps = {
  requestRecipesBound: requestRecipes
};

export const SearchPage = ({ previousSearches }) => (
  <IngredientsForm>
    {!!previousSearches.length && (
      <div>
        <h4>Recent Searches:</h4>
        <ol>
          {previousSearches.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ol>
      </div>
    )}
  </IngredientsForm>
);

SearchPage.propTypes = {
  previousSearches: PropTypes.array
};

SearchPage.defaultProps = {
  previousSearches: []
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
