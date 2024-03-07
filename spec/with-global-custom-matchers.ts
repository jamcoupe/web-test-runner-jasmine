/**
 * This is testing that when a user passes a matcher import via the `matcher` property
 * in the configuration, the custom matchers are available in the test file.
 * 
 * @link configs/web-test-runner.config_with-custom-matchers.mjs
 */

describe("Custom matcher: 'toBeGoofy'", () => {
  
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
