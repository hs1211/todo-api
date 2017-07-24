# Question


## babel(ECMA Specification June.2015)
 현재 나와있는 JS 엔진에는 극히 일부만 실험적으로 적용되어 있어서 실제로 사용하게 될 시점은 까마득한 미래와 같이 느껴진다. 하지만 현재에도 기존 JavaScript와 다른 문법을 사용할 수 있도록 돕는 transform compiler가 존재한다.


Babel의 Arrow Function 관련 플러그인의 이름은 transform-es2015-arrow-functions이다. 

```
$ npm install babel-plugin-transform-es2015-arrow-functions
babel-plugin-transform-es2015-arrow-functions@6.1.18 node_modules/babel-plugin-transform-es2015-arrow-functions
└── babel-runtime@5.8.34 (core-js@1.2.6)
```

설치가 완료되면 .babelrc 파일을 생성해서 플러그인 설정을 해야 한다.

```
{
  "plugins": ["transform-es2015-arrow-functions"]
}
```

.babelrc는 Babel의 설정파일로 트랜스파일을 할 때 어떤 옵션을 사용하고 어떤 파일을 사용할지 등을 JSON 형식으로 지정하는 파일이다. 
앞에서 설치한 transform-es2015-arrow-functions를 사용하도록 plugins에 설정했다.


Presets

필요한 여러 플러그인이나 설정을 미리 설정해 놓은 프리셋을 제공하고 있다. 현재 프리셋에는 es2015, stage-0, stage-1, stage-2, stage-3, react가 있다. es2015는 ES2015를 ES5로 변환하는 데 필요한 설정이 포함되어 있고 stage-x는 TC39에서 ECMAScript 표준을 여러 단계로 나누어 놓은 것이다. 이 단계는 Stage 0 - Strawman, Stage 1 - Proposal, Stage 2 - Draft, Stage 3 - Candidate, Stage 4 - Finished로 나누어 지고 숫자가 적은 단계가 상위 단계를 모두 포함하고 있다. Babel의 stage-x 프리셋은 이 각 단계의 기능을 지원하기 위한 설정이고 react는 React의 JSX를 변환하기 위한 설정이다.

여기서는 es2015를 사용해 보자. ES2015 기능 대부분이 포함되어 있다.
```
check-es2015-constants
transform-es2015-arrow-functions
...
transform-es2015-shorthand-properties
transform-es2015-spread
transform-es2015-sticky-regex
transform-es2015-template-literals
transform-es2015-typeof-symbol
transform-es2015-unicode-regex
transform-regenerator
```

> npm install babel-preset-es2015

babelrc에 플러그인 대신 프리셋을 지정

```
{
  "presets": ["es2015"]
}
```

설치
> npm install --global babel

실행
> $ babel ./src --watch --out-file script-compiled.js

CLI Tool 설치
> $ npm install -g babel-cli 

CLI Tool 실행
```
$ babel-node
> var sum = (a, b) => a + b
undefined
> sum(3, 4)
7
```

## Promise to Asyn
 비동기 프로그래밍에서 동기적인 실행을 지원해 주는 기술

 
 
Promise 는 사용하는 방식 두 가지
** 1. new Promise(function(resolve, reject)) 를 사용하는 패턴
** Promise.resolve(function()) 로 시작하는 패턴이 있죠.

