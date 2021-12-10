module.exports = {
    extends: ["react-native"],
    rules: {
        "arrow-body-style": "off",
        "react/jsx-no-bind": 0,
        "react/prop-types": 1,
        "react/display-name": 0,

        // Render method doesn't need to use this
        "class-methods-use-this": 0,
        "react/no-unescaped-entities": 0,
    }
}
