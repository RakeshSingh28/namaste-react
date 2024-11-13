import { Sum } from "../Sum";

test("Function to calculate sum of two numbers", () => {
  const result = Sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
