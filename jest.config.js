module.exports = {
    preset: "ts-jest",
    // setupFiles: ["jest-canvas-mock"],
    verbose: true,
    testEnvironment: "jsdom",
    testURL: "https://localhost/index.html",
    transform: {
        "\\.(ts|tsx)?$": "ts-jest"
        // "\\.(js|jsx)?$": "./tests/transform.js",
    },
    testMatch: [
        "<rootDir>/(src|test)/**/*.spec.ts?(x)"
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};