// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        "one-var": [0, { "initialized": "never" }],
        "no-undef": 0,
        "no-undef-init": 0,
        "no-undefined": 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 语句强制分号结尾
        'semi': [0, "always"],
        //关闭禁止混用tab和空格
        'no-mixed-spaces-and-tabs': [0],
        'ecl-last': [0],
        'no-unused-vars': [0, {
            // 允许声明未使用变量
            'vars': 'local',
            // 参数不检查
            'args': 'none'
        }],
        "indent": [2, 4], //缩进风格
        "eol-last": 0,
        "space-after-keywords": [0, "always"],//关键字后面是否要空一格
        "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"],//小括号里面要不要有空格
        "space-infix-ops": 0,//中缀操作符周围要不要有空格
        "space-return-throw-case": 0,//return throw case后面要不要加空格
        "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
        "spaced-comment": 0,//注释风格要不要有空格什么的
        "no-multi-spaces": 0,//不能用多余的空格
        "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-spaced-func": 0,//函数调用时 函数名与()之间不能有空格
        "no-trailing-spaces": 0//一行结束后面不要有空格
    }
}
