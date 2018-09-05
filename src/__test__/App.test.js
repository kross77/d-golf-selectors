import { createSelector } from "reselect";
import state from "./mock.store";
import { loyaltyResult } from "./results";

const userIdSelector = state => state.user.user.uid;
const loyalty = state => state.data.user.loyalty;
const getPageRewards = state =>
  state.data.pages.find(v => v.id && v.id === "page-rewards").points;

const getTotal = state =>
  state.data.pages.find(v => v.id && v.id === "page-rewards").total;

const newLine = "test";
const getLoyalty = createSelector(
  loyalty,
  getPageRewards,
  getTotal,
  (loyalty, pageRewards, total) => ({
    ...loyalty,
    points: pageRewards,
    total
  })
);

describe("Test", () => {
  it("reselect is working", () => {
    expect(userIdSelector(state)).toBe("ExPtUasZYmgF8UR0jxXgxeJpefw1");
  });

  it("loyalty selector is working", () => {
    expect(getLoyalty(state)).toEqual(loyaltyResult);
  });
});
