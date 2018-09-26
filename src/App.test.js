import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe("<App />", () => {
  const wrapper = shallow(<App />);

  it("should contain 1 Search Bar component", () => {
    expect(wrapper.find("SearchBar").length).toBe(1);
  });

  it("should contain a class .App", () => {
    expect(wrapper.find(".App").exists()).toBe(true);
  });

  it("should contain a class .alert", () => {
    expect(wrapper.find(".alert").exists()).toBe(true);
  });

  it("has correct alert text", () => {
    expect(wrapper.find('div [role="alert"]').text()).toBe("Enter a github repo name and click Fetch Repo.");
  });

  it('matches the snaphsot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot()
  });
});
