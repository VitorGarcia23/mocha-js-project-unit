import { div } from '../../src/div.js';

describe('Div function', () => {
	it('Positive numbers', async () => {
		const result = div(2, 2);
		expect(result).to.be.eq(1);
	});

	it('Divide by zero', async () => {
		try {
			const result = div(2, 0);
		} catch (err) {
			expect(err.message).to.be.eq(
				'It is not possible to divide a number by 0'
			);
		}
	});
});
