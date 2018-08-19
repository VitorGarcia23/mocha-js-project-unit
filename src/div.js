export function div(a, b) {
	if (b === 0) {
		throw new Error('It is not possible to divide a number by 0');
	}
	return a / b;
}
