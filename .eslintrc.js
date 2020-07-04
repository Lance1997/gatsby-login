module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    extends: `react-app`,
    "jsx-a11y/label-has-for": [ 2, {
        "required": {
            "some": [ "nesting", "id" ]
        }
    }]
  }