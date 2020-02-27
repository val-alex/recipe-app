import React from "react";
import { shallow } from "enzyme";
// import { render } from '@testing-library/react';

import { HomePage } from "Layouts/HomePage/HomePage";

import App from "./App";

describe("(component) App", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const requiredProps = {};

    wrapper = shallow(<App {...requiredProps} />);
    instance = wrapper.instance();
  });

  describe("render", () => {
    it("HomePage", () => {
      expect(wrapper.find(HomePage)).toExist();
    });
  });
});
