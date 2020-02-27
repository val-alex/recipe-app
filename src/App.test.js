import React from "react";
import { render } from "@testing-library/react";

import "jest-enzyme";

import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("(component) App", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const requiredProps = {};

    wrapper = shallow(<App {...requiredProps} />);
    instance = wrapper.instance();
  });

  it("", () => {
    expect(wrapper).toContainReact(welcome);
  });
});
