// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ["error", 2],
        'no-trailing-spaces': ["error", { "skipBlankLines": true }],
        "array-bracket-spacing": ["error", "always"],
        "key-spacing": ["error", { "beforeColon": true }],
        "space-before-function-paren": ["error", "always"],
        // or
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "always"
        }],
        "dot-location": ["error", "object"],
        "beforeColon": true,
        "afterColon": true,
        "align": "value",
        "quotes": ["error", "backtick", { "avoidEscape": true }]
    }
}