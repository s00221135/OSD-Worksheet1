import {greet} from './greet';

describe( 'greet', () => {
it('it should include the name in the message (Fergal Feeney)', () => {
expect (greet ('Frank')).toContain('Frank');
});
it('should not include the name in the message (Fergal Feeney)', () => {
    expect(greet('Joe')).not.toContain('Frank');
});
});