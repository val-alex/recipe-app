import React from "react";
import { shallow } from "enzyme";

import { Navigation } from "Layouts/Navigation/Navigation";

import App from "./App";

describe("(component) App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("render", () => {
    it("Navigation", () => {
      expect(wrapper.find(Navigation)).toExist();
    });
  });
});
