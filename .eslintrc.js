module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ], //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  settings: { // 自动发现React的版本，从而进行规范react代码
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: { // 指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures": {
      jsx: true
    }
  },
  rules: {
    'indent': ['warn', 2], // 缩紧为2个空格，如果不是则显示 warn
    // allow async-await
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 不要使用 debugger，开发关闭，生产报错
    'space-before-function-paren': 'off', // 函数声明时括号与函数名间加空格，关闭，不进行检查
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/interface-name-prefix': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'semi': 'warn' // 不建议使用逗号，如果有则 warn
  }
}
