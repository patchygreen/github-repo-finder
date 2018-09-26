import React from "react";
import SearchBar from "./search_bar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
  const wrapper = shallow(<SearchBar onSearchSubmit={() => {}} />);

  it("should contain 1 input field", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should contain 1 button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
});
