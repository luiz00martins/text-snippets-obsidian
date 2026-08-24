const test = require('node:test');
const assert = require('node:assert/strict');

const {
	DEFAULT_DATE_SYMBOL,
	expandDateSymbol,
	formatLocalDate,
} = require('../.test-build/date.js');

test('formats a local date as YYYY-MM-DD', () => {
	const date = new Date(2026, 7, 3, 23, 59, 59);

	assert.equal(formatLocalDate(date), '2026-08-03');
});

test('expands every current-date symbol in a snippet', () => {
	const date = new Date(2026, 7, 23, 8, 30, 0);
	const snippet = `added=${DEFAULT_DATE_SYMBOL}; reviewed=${DEFAULT_DATE_SYMBOL}`;

	assert.equal(
		expandDateSymbol(snippet, DEFAULT_DATE_SYMBOL, date),
		'added=2026-08-23; reviewed=2026-08-23',
	);
});

test('supports a customized date symbol', () => {
	const date = new Date(2027, 0, 5, 8, 30, 0);

	assert.equal(expandDateSymbol('on {{today}}', '{{today}}', date), 'on 2027-01-05');
});

test('leaves text unchanged when the date symbol is absent', () => {
	assert.equal(expandDateSymbol('plain snippet', DEFAULT_DATE_SYMBOL), 'plain snippet');
});
