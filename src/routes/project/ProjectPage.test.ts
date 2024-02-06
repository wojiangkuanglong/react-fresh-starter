import { describe, expect, it } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('1+1=2', () => {
    expect(1 + 1).equal(2);
  });
});
