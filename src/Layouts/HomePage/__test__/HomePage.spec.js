import React from "react";
import { shallow } from "enzyme";

import { NavBar } from "Layouts/NavBar/NavBar";
import { Footer } from "Layouts/Footer/Footer";

import { HomePage } from "../HomePage.js";

describe("(component) HomePage", () => {
  let wrapper;

  beforeEach(() => {
    const requiredProps = {};

    wrapper = shallow(<HomePage {...requiredProps} />);
  });

  describe("render", () => {
    it("component", () => {
      expect(wrapper).toExist();
      expect(wrapper.find(".home-page-wrapper")).toExist();
    });

    it("NavBar", () => {
      expect(wrapper.find(NavBar)).toExist();
    });

    it("Footer", () => {
      expect(wrapper.find(Footer)).toExist();
    });
  });
});
