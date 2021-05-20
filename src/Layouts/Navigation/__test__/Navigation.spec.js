import React from "react";
import { shallow } from "enzyme";

import { Navigation } from "../Navigation.js";

describe("(component) Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  describe("render", () => {
    it("IngredientsForm", () => {
      expect(wrapper).toExist();
    });
  });
});
