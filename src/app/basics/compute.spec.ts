import {compute} from './compute';
describe ('compute', () => {
it('should return 0 if the input is negative (Fergal Feeney)', () => {
const result = compute(-1);
expect (result).toBe(0);
})

it ("should return input+1 if the input is positive (Fergal Feeney)", () =>{
    const result = compute(1);
    expect(result).toBe(2);

expect(result).toBeGreaterThan(1);
expect(result).toBeLessThanOrEqual(10);
});
}); 