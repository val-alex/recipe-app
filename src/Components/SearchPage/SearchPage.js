import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { requestRecipes } from "Store/Actions/actions";

import IngredientsForm from "Components/Forms/ingredientsForm/IngredientsForm";

// import * as Styles from "./SearchPageStyles";

const mapStateToProps = state => ({
  previousSearches: state.recipes.recentSearches || []
});

const mapDispatchToProps = {
  requestRecipesBound: requestRecipes
};

export const SearchPage = ({ previousSearches }) => (
  <div className="request-recipes-page-wrapper">
    <IngredientsForm>
      {!!previousSearches.length && (
        <div>
          <h3>Recent Searches</h3>
          <ol>
            {previousSearches.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </div>
      )}
    </IngredientsForm>
  </div>
);

SearchPage.propTypes = {
  previousSearches: PropTypes.array
};

SearchPage.defaultProps = {
  previousSearches: []
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
