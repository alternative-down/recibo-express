import { describe, it, expect } from 'vitest';
import { PLANS } from '../plans';

describe('PLANS', () => {
  it('has exactly 2 plans', () => {
    expect(PLANS).toHaveLength(2);
  });

  it('Free plan has correct values', () => {
    const free = PLANS.find(p => p.id === 'free');
    expect(free).toBeDefined();
    expect(free!.price).toBe(0);
    expect(free!.receiptsPerMonth).toBe(1);
    expect(free!.recommended).toBeUndefined();
  });

  it('Pro plan has correct values', () => {
    const pro = PLANS.find(p => p.id === 'pro');
    expect(pro).toBeDefined();
    expect(pro!.price).toBe(9.9);
    expect(pro!.receiptsPerMonth).toBe(Infinity);
    expect(pro!.recommended).toBe(true);
  });

  it('prices are positive numbers', () => {
    PLANS.forEach(plan => {
      expect(plan.price).toBeGreaterThanOrEqual(0);
    });
  });

  it('both plans have required fields', () => {
    PLANS.forEach(plan => {
      expect(plan.id).toBeDefined();
      expect(plan.name).toBeDefined();
      expect(plan.price).toBeDefined();
      expect(plan.receiptsPerMonth).toBeDefined();
      expect(plan.features).toBeInstanceOf(Array);
      expect(plan.features.length).toBeGreaterThan(0);
    });
  });

  it('features are all non-empty strings', () => {
    PLANS.forEach(plan => {
      plan.features.forEach(feature => {
        expect(typeof feature).toBe('string');
        expect(feature.trim().length).toBeGreaterThan(0);
      });
    });
  });
});