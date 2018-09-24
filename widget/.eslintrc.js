module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "semi": ["warn", "never"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "indent": ["error", 4]
    },
    // Avoir les variables globales comme document
    "env": {
        "browser": true
    }
};
