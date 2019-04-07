import React from "react";
import { shallow } from "enzyme";
import Register from "../../components/Register";
import InputField from "../../components/common/InputField";

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
