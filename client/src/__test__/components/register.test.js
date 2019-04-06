import React from "react";
import { shallow, mount } from "enzyme";
import Register from "../../components/Register";

describe("<Register />", () => {
  const wrapper = shallow(<Register />);
  it("renders the register component successfully", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("shows", () => {
    expect(wrapper.find(".inputs")).toBeDefined();
  });
});
