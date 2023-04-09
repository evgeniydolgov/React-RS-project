import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
});
