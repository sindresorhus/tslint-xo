import fs from 'fs';
import test from 'ava';
import * as tslint from 'tslint';

const runTSLint = filename => {
	const linter = new tslint.Linter({});
	const config = tslint.Configuration.findConfiguration('index.js', filename).results;
	linter.lint(filename, fs.readFileSync(filename, 'utf8'), config);
	return linter.getResult();
};

test('main', t => {
	const result = runTSLint('fixture.ts');
	t.true(result.failures.some(failure => failure.ruleName === 'no-empty-interface'));
});
