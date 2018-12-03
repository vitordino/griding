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

- [ ] finish `<ThemeProvider/>`
- [ ] make [`emotion`](https://emotion.sh/) version
- [ ] make vanilla style version
- [ ] optimize build size
- [ ] props to handle alignments (?)


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
import {Row, Cell, GridingProvider} from '../../src'

const App = () => (
  <GridingProvider>
    <Row vertical-gutter>
      <Cell xs={6} sm={4} md={3} lg={2}>
        <div>lorem</div>
      </Cell>
      <Cell xs={6} sm={4} md={3} lg={2}>
        <div>ipsum</div>
      </Cell>
    </Row>
  </GridingProvider>
)
```


customizing options (wip):

```jsx
import {Row, Cell, GridingProvider} from '../../src'

// it will understand pixels/rems to fit your needs
const myCoolTheme = {
  columns: 13,
  breakpoints: {
    hey:   { width: 0, gutter: '16px' },
    thats: { width: 480, gutter: '1.5rem' },
    rad:   { width: '48rem', gutter: 32 },
  }
}

const App = () => (
  <GridingProvider theme={myCoolTheme}>
    <Row>
      {/* look how cool, your own named breakpoints */}
      <Cell hey={6} thats={4} rad={3}>
        <div>lorem ipsum</div>
      </Cell>
    </Row>
  </GridingProvider>
)
```


#### thanks

mostly of this lib was done with [@leonardodino](https://github.com/leonardodino) great help and probably wouldn't be possible without it.



[npm-badge]: https://img.shields.io/npm/v/griding.png?style=flat-square
[npm]: https://npmjs.org/package/griding

[demo-badge]: https://img.shields.io/badge/🌐-demo-lightgray.svg?style=flat-square
[demo]: https://griding.vitordino.com/

[build-badge]: https://img.shields.io/travis/vitordino/griding/master.png?style=flat-square
[build]: https://travis-ci.org/vitordino/griding

[coveralls-badge]: https://img.shields.io/coveralls/vitordino/griding/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/vitordino/griding
