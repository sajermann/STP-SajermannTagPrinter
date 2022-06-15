import '@testing-library/jest-dom';
import { generateNumbers, generateGuid } from '.';

describe('Validate GenerateNumbers', () => {
	test('Must result string with 10 of length', () => {
		const result = generateNumbers(10);
		expect(result.length).toEqual(10);
	});

	test('Must result string with 5 of length', () => {
		const result = generateNumbers(5);
		expect(result.length).toEqual(5);
	});

	test('Must result string empty', () => {
		const result = generateNumbers(0);
		expect(result).toEqual('');
	});
});

describe('Validate GenerateGuid', () => {
	test('Must result string length 36', () => {
		const result = generateGuid();
		expect(result.length).toEqual(36);
	});

	test('Must result array length 5', () => {
		const result = generateGuid().split('-');
		expect(result.length).toEqual(5);
	});
});
