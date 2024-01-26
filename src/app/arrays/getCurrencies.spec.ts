import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should contain USD, GBP, and EUR (Fergal Feeney)', () => {
    const currencies = getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('GBP');
    expect(currencies).toContain('EUR');
  });

  it('should not contain CAD (Fergal Feeney)', () => {
    const currencies = getCurrencies();
    expect(currencies).not.toContain('CAD');
  });
});