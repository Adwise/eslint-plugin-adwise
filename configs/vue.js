module.exports = {
    extends: [
        "plugin:vue/essential",
    ],
    parser: "vue-eslint-parser",
    plugins: [
        "sort-class-members"
    ],
    rules: {
        "sort-class-members/sort-class-members": [
            "error",
            {
                "order": [
                    "[static-properties]",
                    "[properties]",
                    "[conventional-private-properties]",
                    "constructor",
                    "[mounted]",
                    "[static-methods]",
                    "[getters]",
                    "[setters]",
                    "[accessor-pairs]",
                    "[event-handlers]",
                    "[methods]",
                    "[everything-else]"
                ],
                "groups": {
                    "event-handlers": [{ "name": "/on.+/", "type": "method", "sort": "alphabetical" }],
                    "mounted": [{
                        "name": "mounted",
                        "type": "method"
                    }]
                },
                "accessorPairPositioning": "getThenSet"
            }
        ],
        "vue/mustache-interpolation-spacing": ["error", "always"]

    }
}
