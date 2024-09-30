
function add(a, b) {
  return a + b;
}

describe("Math Functions", () => {
  describe("add()", () => {
    it("adds two numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(-1, 1)).to.equal(0);
      expect(add(0, 0)).to.equal(0);
    });

    it("handles adding negative numbers", () => {
      expect(add(-1, -1)).to.equal(-2);
      expect(add(-5, 3)).to.equal(-2);
    });
  });
});
