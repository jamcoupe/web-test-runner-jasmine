import {goofyCustomMatchers} from "./utils/custom-matcher";

describe("Custom matcher: 'toBeGoofy'", () => {
  
  beforeEach(() => {
    jasmine.addMatchers(goofyCustomMatchers);
  });
  
  it("is available on an expectation", () => {
    expect({
      hyuk: 'gawrsh'
    }).toBeGoofy();
  });

  it("can take an 'expected' parameter", () => {
    expect({
      hyuk: 'gawrsh is fun'
    }).toBeGoofy(' is fun');
  });

  it("can be negated", () => {
    expect({
      hyuk: 'this is fun'
    }).not.toBeGoofy();
  });
});
