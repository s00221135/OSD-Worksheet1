import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should contain USD, GBP, and EUR', () => {
    const currencies = getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('GBP');
    expect(currencies).toContain('EUR');
  });

  it('should not contain CAD', () => {
    const currencies = getCurrencies();
    expect(currencies).not.toContain('CAD');
  });
});