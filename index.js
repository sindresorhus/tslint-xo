'use strict';
const path = require('path');

// TODO: TSLint should improve this:
// https://github.com/palantir/tslint/issues/3436
const getRuleDirectory = (name, directory) =>
	path.join(path.dirname(require.resolve(name)), directory || '');

module.exports = {
	rulesDirectory: [
		getRuleDirectory('tslint-eslint-rules', 'dist/rules'),
		getRuleDirectory('tslint-consistent-codestyle'),
		getRuleDirectory('tslint-microsoft-contrib')
	],
	rules: {
		'adjacent-overload-signatures': true,
		'ban-types': [
			true,
			['String', 'Use `string` instead.'],
			['Number', 'Use `number` instead.'],
			['Boolean', 'Use `boolean` instead.'],
			['Object', 'Use `object` instead.'],
			['object', 'Use `{}` instead.'],
			['any', 'Use `unknown` instead.'],
			['Function', 'Use a specific function type instead, like `() => void`.']
		],
		'member-access': [
			true,
			'no-public'
		],
		'member-ordering': [
			true,
			{
				order: 'fields-first'
			}
		],
		'ban-comma-operator': true,
		'no-empty-interface': true,
		'no-import-side-effect': true,
		'no-inferrable-types': true,
		'no-internal-module': true,
		'no-namespace': true,
		'no-non-null-assertion': true,
		'no-parameter-reassignment': true,
		'no-reference': true,
		'no-unnecessary-type-assertion': true,
		'no-var-requires': true,
		'only-arrow-functions': [
			true,
			'allow-named-functions'
		],
		'prefer-for-of': true,
		'promise-function-async': true,
		typedef: [
			true,
			'call-signature',
			'arrow-call-signature',
			'parameter',
			'arrow-parameter',
			'property-declaration',
			'member-variable-declaration',
			'object-destructuring',
			'array-destructuring'
		],
		'typedef-whitespace': [
			true,
			{
				'call-signature': 'nospace',
				'index-signature': 'nospace',
				parameter: 'nospace',
				'property-declaration': 'nospace',
				'variable-declaration': 'nospace'
			},
			{
				'call-signature': 'onespace',
				'index-signature': 'onespace',
				parameter: 'onespace',
				'property-declaration': 'onespace',
				'variable-declaration': 'onespace'
			}
		],
		'unified-signatures': true,
		'await-promise': true,
		curly: true,
		'function-constructor': true,
		'label-position': true,
		'no-arg': true,
		'no-conditional-assignment': true,
		'no-construct': true,
		'no-debugger': true,
		'no-duplicate-super': true,
		'no-duplicate-switch-case': true,
		'no-duplicate-variable': true,
		'no-dynamic-delete': true,
		'no-empty': true,
		'no-eval': true,
		'no-floating-promises': true,
		'no-for-in-array': true,
		'no-implicit-dependencies': [
			true,
			'dev',
			'optional'
		],
		'no-inferred-empty-object-type': true,
		'no-invalid-template-strings': true,
		'no-invalid-this': false,
		'no-misused-new': true,
		'no-null-keyword': true,
		'no-object-literal-type-assertion': true,
		'no-return-await': true,
		'no-shadowed-variable': true,
		'no-sparse-arrays': true,
		'no-string-literal': true,
		'no-string-throw': true,
		'no-switch-case-fall-through': true,
		'no-this-assignment': true,

		// Disabled as it has a lot of false-positives and
		// the 'ignore-static' option doesn't seem to work
		// 'no-unbound-method': [
		// 	true,
		// 	'ignore-static'
		// ],

		'no-unnecessary-class': true,
		'no-unsafe-any': true,
		'no-unsafe-finally': true,
		'no-unused-expression': true,
		// This one is deprecated, but we keep it in case it gets undeprecated again:
		// https://github.com/palantir/tslint/pull/3919
		// 'no-unused-variable': true,
		'no-use-before-declare': true,
		'no-var-keyword': true,
		'no-void-expression': true,
		'prefer-conditional-expression': true,
		'prefer-object-spread': true,
		radix: true,
		'restrict-plus-operands': true,
		'strict-type-predicates': true,
		'switch-default': true,
		'triple-equals': true,
		'unnecessary-constructor': true,
		'use-default-type-parameter': true,
		'use-isnan': true,
		deprecation: true,
		eofline: true,
		indent: [
			true,
			'tabs'
		],
		'linebreak-style': [
			true,
			'LF'
		],
		'no-duplicate-imports': true,
		'no-require-imports': true,
		'prefer-const': true,
		'prefer-readonly': true,
		'trailing-comma': [
			false,
			{
				esSpecCompliant: true
			}
		],
		align: [
			true,
			'arguments',
			'elements',
			'members',
			'parameters',
			'statements'
		],
		'array-type': [
			true,
			'array'
		],
		'arrow-parens': [
			true,
			'ban-single-arg-parens'
		],
		'arrow-return-shorthand': true,
		'binary-expression-operand-order': true,
		'callable-types': true,
		'class-name': true,
		'comment-format': [
			true,
			'check-space',
			'check-uppercase'
		],
		encoding: true,
		'file-name-casing': [
			true,
			'kebab-case'
		],
		'import-spacing': true,
		'interface-over-type-literal': true,
		'jsdoc-format': [
			true,
			'check-multiline-start'
		],
		'newline-before-return': false,
		'new-parens': true,
		'no-angle-bracket-type-assertion': true,
		'no-boolean-literal-compare': false,
		'no-consecutive-blank-lines': true,
		'no-irregular-whitespace': true,
		'no-redundant-jsdoc': true,
		'no-reference-import': true,
		'no-trailing-whitespace': true,
		'no-unnecessary-callback-wrapper': true,
		'no-unnecessary-initializer': true,
		'no-unnecessary-qualifier': true,
		'number-literal-format': true,
		'object-literal-key-quotes': [
			true,
			'as-needed'
		],
		'object-literal-shorthand': true,
		'one-variable-per-declaration': true,
		'prefer-method-signature': true,
		'prefer-switch': [
			true,
			{
				'min-cases': 3
			}
		],
		'prefer-template': [
			true,
			'allow-single-concat'
		],
		'prefer-while': true,
		quotemark: [
			true,
			'single',
			'avoid-template'
		],
		semicolon: [
			true,
			'always',
			'strict-bound-class-methods'
		],
		'space-before-function-paren': [
			true,
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
				method: 'never',
				constructor: 'never'
			}
		],
		'space-within-parens': [
			true,
			0
		],
		'switch-final-break': true,
		'type-literal-delimiter': [
			true,
			{
				singleLine: 'always'
			}
		],
		'unnecessary-bind': true,
		'variable-name': [
			true,
			'check-format',
			'ban-keywords'
		],
		whitespace: [
			true,
			'check-branch',
			'check-decl',
			'check-operator',
			// Disabled because it conflicts with `object-curly-spacing`
			// 'check-module',
			'check-separator',
			'check-rest-spread',
			'check-type',
			'check-typecast',
			'check-type-operator',
			'check-preblock'
			// Disabled because it conflicts with `object-curly-spacing`
			// 'check-postbrace'
		],

		// `tslint-eslint-rules`
		'no-constant-condition': true,
		'no-control-regex': true,
		'no-empty-character-class': true,
		'no-ex-assign': true,
		'no-extra-boolean-cast': true,
		'no-extra-semi': true,
		'no-inner-declarations': true,
		'no-invalid-regexp': true,
		'no-regex-spaces': true,
		'no-unexpected-multiline': true,
		'no-multi-spaces': true,
		'ter-no-proto': true,
		'ter-no-script-url': true,
		'ter-no-self-compare': true,
		'array-bracket-spacing': [
			true,
			'never'
		],
		'brace-style': [
			true,
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		'ter-computed-property-spacing': [
			true,
			'never'
		],
		'ter-func-call-spacing': [
			true,
			'never'
		],
		'object-curly-spacing': [
			true,
			'never'
		],
		'ter-padded-blocks': [
			true,
			'never'
		],
		'space-in-parens': [
			true,
			'never'
		],
		'ter-arrow-spacing': [
			true,
			{
				before: true,
				after: true
			}
		],

		// `tslint-consistent-codestyle`
		'early-exit': [
			true,
			{
				'ignore-constructor': true
			}
		],
		'no-accessor-recursion': true,
		'no-collapsible-if': true,
		'no-else-after-return': true,
		'no-return-undefined': true,
		'no-static-this': true,
		'no-unnecessary-else': true,
		'no-unnecessary-type-annotation': [
			true,
			'check-return-type'
		],
		'no-unused': [
			true,
			'unused-function-expression-name',
			'unused-class-expression-name',
			'unused-catch-binding'
		],
		'no-var-before-return': true,
		'prefer-const-enum': true,

		// `tslint-microsoft-contrib`
		// Disabled because of https://github.com/Microsoft/tslint-microsoft-contrib/issues/378
		// 'import-name': [true, {
		// 	ava: 'test',
		// 	lodash: '_'
		// }],
		'no-banned-terms': true,
		'no-delete-expression': true,
		'no-document-domain': true,
		'no-document-write': true,
		'no-empty-line-after-opening-brace': true,
		'no-for-in': true,
		'no-function-constructor-with-string-args': true,
		// We're using `only-arrow-functions` instead
		// 'no-function-expression': true,
		'no-http-string': true,
		'no-inner-html': true,
		'no-jquery-raw-elements': true,
		'no-octal-literal': true,
		'no-single-line-block-comment': true,
		'no-string-based-set-immediate': true,
		'no-string-based-set-interval': true,
		'no-string-based-set-timeout': true,
		'no-typeof-undefined': true,
		'no-unnecessary-bind': true,
		'no-unnecessary-override': true,
		'no-unnecessary-semicolons': true,
		'no-useless-files': true,
		'no-with-statement': true,
		'react-anchor-blank-noopener': true,
		'react-iframe-missing-sandbox': true,
		'react-no-dangerous-html': true,
		'react-this-binding-issue': true,
		'react-unused-props-and-state': true,
		'underscore-consistent-invocation': true,
		'use-named-parameter': true
	}
};
