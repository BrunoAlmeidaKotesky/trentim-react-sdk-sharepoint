// Setup the test environment.

//Setup jest to support ecmascript modules and typescript
export default {
    testEnvironment: 'jest-environment-node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};