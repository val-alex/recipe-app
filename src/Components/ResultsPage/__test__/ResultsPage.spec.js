import React from "react";
import { shallow } from "enzyme";

import { ResultsPage } from "../ResultsPage.js";

describe("(component) ResultsPage", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const requiredProps = {
      searchResults: ["result1", "result2"]
    };

    wrapper = shallow(<ResultsPage {...requiredProps} />);
    instance = wrapper.instance();
  });

  describe("render", () => {
    it("IngredientsForm", () => {
      expect(wrapper).toExist();
      expect(wrapper.find(".results-page-wrapper")).toExist();
    });
  });
});
