module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    // Add rules as needed, or keep them relaxed for now
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/no-unknown-property": ["error", { 
      "ignore": ["x-placement"] 
    }]
  }
}; 