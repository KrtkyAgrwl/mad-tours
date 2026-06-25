const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const guides = require("../src/data/guides");

describe("guides data", () => {
  it("should contain at least one guide", () => {
    assert.ok(guides.length > 0);
  });

  it("every guide should have required fields", () => {
    for (const guide of guides) {
      assert.ok(guide.id, `guide missing id`);
      assert.ok(guide.name, `guide ${guide.id} missing name`);
      assert.ok(guide.monument, `guide ${guide.id} missing monument`);
      assert.ok(guide.languages.length > 0, `guide ${guide.id} has no languages`);
      assert.ok(guide.pricePerHour > 0, `guide ${guide.id} has invalid price`);
    }
  });

  it("ratings should be between 1 and 5", () => {
    for (const guide of guides) {
      assert.ok(guide.rating >= 1 && guide.rating <= 5, `guide ${guide.id} has invalid rating`);
    }
  });
});
