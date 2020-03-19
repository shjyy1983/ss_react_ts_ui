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
    // 一致的缩进，当前为 2 个空格：警告
    'indent': ['warn', 2],
    // 生产环境禁用 debugger：错误
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // function的左括号之前使用一致的空格：关闭
    'space-before-function-paren': 'off',
    // 多行空行：警告
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    // 未使用过的变量：警告
    'no-unused-vars': 'warn',
    // 非骆驼拼写法命名约定：警告
    'camelcase': 'warn',
    // 不可达代码：警告
    'no-unreachable': 'warn',
    // 禁止在语句后使用分号：警告
    'semi': 'warn',
    // 禁用未声明的变量：警告
    'no-undef': 'warn',
    //禁止末尾逗号：警告
    'comma-dangle': 'warn',
    // 使用 === 和 !==：警告
    'eqeqeq': 'warn',
    // 禁用 tab
    'no-tabs': 'warn',
    // 禁止扩展原生类型
    'no-extend-native': 'off',
    // 行尾空格：警告
    'no-trailing-spaces': 'warn',
    // 禁止在 return 语句中使用赋值语句：警告
    'no-return-assign': 'warn',
    // 禁止不规则的空白
    'no-irregular-whitespace': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 要求回调函数中有容错处理：警告
    'handle-callback-err': 'warn',
    // 不建议使用逗号，如果有则 warn
    'semi': 'warn',
    // 使用过期函数：警告
    // 'node/no-deprecated-api': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/interface-name-prefix': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
