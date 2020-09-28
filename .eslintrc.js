module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'import', 'react-hooks'],
    settings: {
        react: {
            version: '16.13.1'
        },
        'import/resolver': {
            alias: {
                extensions: ['.js']
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'react/display-name': 0,
        'react/prop-types': [0],
        'react/react-in-jsx-scope': 0,
        'react/jsx-no-undef': [0],
        'no-console': ['error', { allow: ['warn', 'debug', 'error'] }],
        'no-case-declarations': 0,
        'no-undef': [2, { typeof: true }],
        'no-unused-vars': [2, { ignoreRestSiblings: true, varsIgnorePattern: 'React' }],
        'import/no-unresolved': ['error', { ignore: ['^@*'] }],
        'import/namespace': [2, { allowComputed: true }],
        'prefer-const': [0],
        'array-callback-return': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': 'warn'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        PROCESS_ENV: 'readonly',
        React: 'readonly'
    }
};
