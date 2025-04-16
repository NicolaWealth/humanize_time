import assert from "assert";
import {humanizeTime} from "./humanize_time";

describe("humanizeTime tests", () => {
  it("check if output is correct", async () => {
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    assert.deepEqual(humanizeTime(550), 'less than a second');
    assert.deepEqual(humanizeTime(second), '1 second');
    assert.deepEqual(humanizeTime(second + 10), '1 second');
    assert.deepEqual(humanizeTime(2 * second + 40), '2 seconds');
    assert.deepEqual(humanizeTime(59 * second), '59 seconds');
    assert.deepEqual(humanizeTime(minute), '1 minute');
    assert.deepEqual(humanizeTime(minute + 9 * second), '1 minute');
    assert.deepEqual(humanizeTime(2 * minute + 10), '2 minutes');
    assert.deepEqual(humanizeTime(hour), '1 hour');
    assert.deepEqual(humanizeTime(hour + 10 * second), '1 hour');
    assert.deepEqual(humanizeTime(hour + minute), '1 hour 1 minute');
    assert.deepEqual(humanizeTime(hour + 2 * minute), '1 hour 2 minutes');
    assert.deepEqual(humanizeTime(2 * hour + minute + second), '2 hours 1 minute');
  });
});
