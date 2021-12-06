import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import toJson from "enzyme-to-json";
import { hello, add, removeSNames } from './App';

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
});

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('Steve');
  });
  it('should not remove other names', () => {
    const names = ['Scott', 'Courtney', 'Wes'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).toContain('Wes');
  });
  it('should account for case', () => {
    const names = ['Scott', 'Courtney', 'Wes', 'scott'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('scott');
  });
});

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});


 it("renders without crashing", () => {
  shallow(<App />);
});
it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(header)).toEqual(true);
}); 


const user = {
  name: "Tiffany Bibby",
  email: "tiffany@gmail.com",
  username: "Tiffany",
};
describe("<Account />", () => {
  it("contains account", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("tiffany@gmail.com");
  });
  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});

it("renders without crashing", () => {
  const mockColor = "Tiffany";
  const wrapper = shallow(<App color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});