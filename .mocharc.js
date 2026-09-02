module.exports = {
  require: [
    "ts-node/register",
    "source-map-support/register",
  ],
  "full-trace": true,
  color: true,
  bail: true,
  spec: "src/**/*.test.ts",
};
