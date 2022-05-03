import { getOutTest } from "./common";

describe("Test example", () => {
  it("true should be true", () => {
    expect(getOutTest()).toBe("GetOuT");
    expect(getOutTest()).not.toBe("Get In");
  });
});
