module.exports = {
    preset: "ts-jest",
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
        "\\.(css|less)$": "identity-obj-proxy",
        // "\\.(png)$": "<rootDir>/src/imageTransformer.js"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    // setupFiles: ['<rootDir>/src/setupTests.ts', 'jest-canvas-mock']
};