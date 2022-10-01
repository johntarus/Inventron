module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'type-enum': [
            2,
            'always',
            [
                'build',
                'change',
                'chore',
                'ci',
                'deprecate',
                'docs',
                'feat',
                'fix',
                'ref',
                'perf',
                'refactor',
                'remove',
                'revert',
                'security',
                'style',
                'test',
            ],
        ],
    },
}
