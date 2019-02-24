# [WIP] griding

[![npm package][npm-badge]][npm]
[![demo][demo-badge]][demo]
[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]


> **griding** is a set of react components to make grid layouts easier


### why

although there are — already — an infinite amount of grid packages (pure css, stylus/sass, react) i couldn't find one that fill my needs:

1. responsive gutters
2. customisable breakpoints
3. real *react-like* API
4. easy to compose styles (lib-agnostic)


### roadmap

- [x] finish `<ThemeProvider/>`
- [x] parse different units
- [ ] expose an `above` utility (or make it a lib on it's own)

### installation

yarn:
```
yarn add griding
```

npm:
```
npm install griding --save
```


### usage

basic usage (using default options):

```jsx
import {Row, Cell, Provider} from '../../src'

const App = () => (
  <Provider>
    <Row vertical-gutter>
      <Cell xs={6} sm={4} md={3} lg={2}>
        <div>lorem</div>
      </Cell>
      <Cell xs={6} sm={4} md={3} lg={2}>
        <div>ipsum</div>
      </Cell>
    </Row>
  </Provider>
)
```


customizing options:

```jsx
import {Row, Cell, Provider} from '../../src'

// it will understand pixels/rems to fit your needs [unstable]
const breakpoints = {
  hey:   { width: 0, gutter: '16px' },
  thats: { width: 480, gutter: '1.5rem' },
  rad:   { width: '48rem', gutter: 32 },
}

const App = () => (
  <Provider breakpoints={breakpoints} columns={13}>
    <Row>
      {/* look how cool, your own named breakpoints & custom column count */}
      <Cell hey={6} thats={4} rad={3}>
        <div>lorem ipsum</div>
      </Cell>
    </Row>
  </Provider>
)
```


#### thanks

<sub>mostly of this lib was done with [@leonardodino](https://github.com/leonardodino) great help and probably wouldn't be possible without it.</sub>



[npm-badge]: https://img.shields.io/npm/v/griding.png?style=flat-square
[npm]: https://npmjs.org/package/griding

[demo-badge]: https://img.shields.io/badge/www-demo-lightgray.png?style=flat-square
[demo]: https://griding.vitordino.com/

[build-badge]: https://img.shields.io/travis/vitordino/griding/master.png?style=flat-square
[build]: https://travis-ci.org/vitordino/griding

[coveralls-badge]: https://img.shields.io/coveralls/vitordino/griding/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/vitordino/griding
