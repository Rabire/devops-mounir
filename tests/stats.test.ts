/* eslint-disable no-undef */
import { generateStats } from "../utils/stats";

test("check if stats is not null", () => {
  const response = generateStats();
  expect(response.stats).toHaveLength(3);
});

test("check response properties", () => {
  const response = generateStats();

  expect(response).toHaveProperty("stats");
  expect(response).toHaveProperty("total");
});

test("check if total is equal to the sum of kiteNumbers", () => {
  const response = generateStats();

  const totalResponse = response.stats.reduce(
    (sum, array) => sum + array.kiteNumber,
    0,
  );
  expect(response.total).toBe(totalResponse);
});
