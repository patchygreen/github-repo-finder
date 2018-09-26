import React from "react";
import RepoDetail from "./repo_detail";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<RepoDetail />", () => {
  const wrapper = shallow(
    <RepoDetail
      repoName={" "}
      repoForks={1000}
      repoWatchers={1000}
      repoStars={1000}
    />
  );

  it("should contain 1 h2 field", () => {
    expect(wrapper.find("h2").length).toBe(1);
  });

  it("h2 contains correct text", () => {
    expect(wrapper.find("h2").text()).toBe(" ");
  });
});
