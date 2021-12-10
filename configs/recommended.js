module.exports = {
    extends: [
        "eslint:recommended"
    ],
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    rules: {
        // Disable undefined checking, since in the browser window is undefined
        "no-undef": "off",

        // Don't allow more then 1 empty line, don't allow a empty line as the start of the file
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        // Allow both styles of arrow functions
        "arrow-body-style": "off",

        // Disallow use of nodejs-modules since we are probably a browser
        "import/no-nodejs-modules": "error",

        // We always want the last statement to be export statement
        "import/exports-last": "error",

        // Import Ordering
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index"
                ],
                "newlines-between": "always"
            }
        ],
        // Dont allow variables to be used before they are defined
        "no-use-before-define": "error",

        // Prefer single quotes
        "quotes": [
            "error",
            "single"
        ],

        // Don't use semicolons
        "semi": ["error", "never"],

        // Don't allow dangling comma's
        "comma-dangle": ["error", "never"],

        // Spaces Around Keywords
        "keyword-spacing": [
            "error",
            {
                "after": true,
                "before": true,
                "overrides": {}
            }
        ],

        // Always require space after comment start
        "spaced-comment": [
            "error",
            "always"
        ],

        // Require a space before a async function, but not before others
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],

        // Require spaces before blocks
        "space-before-blocks": [
            "error",
            "always"
        ],

        // Require space between operators like + / - / /
        "space-infix-ops": [
            "error",
            {
                "int32Hint": false
            }
        ],

        // Warn about unused variables
        "no-unused-vars": "warn",

        // Warn about uses of console logs
        "no-console": ["warn", {
            "allow": ["warn", "error"]
        }]
    }
}
