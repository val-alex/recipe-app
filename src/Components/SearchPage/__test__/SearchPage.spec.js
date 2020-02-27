import React from "react";
import { shallow } from "enzyme";

import IngredientsForm from "Components/Forms/ingredientsForm/IngredientsForm";

import { SearchPage } from "../SearchPage.js";

describe("(component) SearchPage", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const requiredProps = {
      previousSearches: ["apple", "banana"]
    };

    wrapper = shallow(<SearchPage {...requiredProps} />);
    instance = wrapper.instance();
  });

  describe("render", () => {
    it("IngredientsForm", () => {
      expect(wrapper).toExist();
      expect(wrapper.find(".search-page-wrapper")).toExist();
      expect(wrapper.find(IngredientsForm)).toExist();
    });
  });
});
