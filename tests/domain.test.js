const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateBtu, quoteTotals } = require('../src/domain.js');

test('calcule une puissance BTU arrondie', () => {
  const result = calculateBtu({ area: 20, height: 2.7, exposure: 'moyenne', windows: 2, occupants: 2, zone: 'habitation' });
  assert.equal(result.watts, 8720);
  assert.equal(result.btu, 30000);
});

test('calcule HT, TVA et TTC', () => {
  assert.deepEqual(quoteTotals([{ qty: 2, unitPrice: 10000 }, { qty: 1, unitPrice: 5000 }], 20), { subtotal: 25000, tax: 5000, total: 30000 });
});
