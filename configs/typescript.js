module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        // Bugfix https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],

        // Bugfix https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": ["error"],

        // Don't allow dangling comma's
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],

        // Warn about unused vars. Typescript Specific
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],

        // Warn about possibly dangerous ts-ignore
        "@typescript-eslint/ban-ts-comment": "warn",

        // Warn about usage of "as any" since it defeats typescript
        "@typescript-eslint/no-explicit-any": ["warn", {"ignoreRestArgs": true}]
    }
}
