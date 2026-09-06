const round500 = value => Math.ceil(value / 500) * 500;

function calculateBtu({ area, height, exposure, windows, occupants, zone }) {
  const a = Math.max(0, Number(area) || 0);
  const h = Math.max(2, Number(height) || 2.7);
  const w = Math.max(0, Number(windows) || 0);
  const p = Math.max(1, Number(occupants) || 1);
  const exposureFactor = exposure === 'forte' ? 1.2 : exposure === 'faible' ? 0.9 : 1;
  const zoneFactor = zone === 'commerce' ? 1.22 : zone === 'bureau' ? 1.12 : 1;
  const base = a * h * 150;
  const watts = (base + w * 250 + Math.max(0, p - 1) * 120) * exposureFactor * zoneFactor;
  return { watts: Math.round(watts), btu: round500(watts * 3.412) };
}

function quoteTotals(items, taxRate = 20) {
  const subtotal = items.reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unitPrice) || 0), 0);
  const tax = subtotal * (Number(taxRate) || 0) / 100;
  return { subtotal, tax, total: subtotal + tax };
}

const money = value => `${new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(value)} DH`;

function statusLabel(status) {
  return ({ prospect: 'Prospect', planifie: 'Planifié', encours: 'En cours', termine: 'Terminé', ouvert: 'Ouvert', urgent: 'Urgent' })[status] || status;
}

module.exports = { calculateBtu, quoteTotals, money, statusLabel };
