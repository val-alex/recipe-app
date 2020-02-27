import React from "react";
import { shallow } from "enzyme";

import { IngredientsForm } from "../IngredientsForm.js";

describe("(component) IngredientsForm", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    // CHANGE_ME do the searchBound thing
    const requiredProps = {};

    wrapper = shallow(<IngredientsForm {...requiredProps} />);
    instance = wrapper.instance();
  });

  describe("render", () => {
    it("IngredientsForm", () => {
      expect(wrapper).toExist();
    });
  });
});
