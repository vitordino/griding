![griding](./logo.svg)

[![npm package][npm-badge]][npm]
[![demo][demo-badge]][demo]
[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![Bundlephobia][bundlephobia-badge]][bundlephobia]

> **griding** is a set of react components, hooks and helpers to make responsive / grid layouts easier

### why

although there are — already — an infinite amount of grid packages (pure css, stylus/sass, react) i couldn't find one that fill my needs:

1. responsive gutters
2. customisable breakpoints
3. real _react-like_ API
4. easy to compose styles (lib-agnostic)
5. local overrides (via nested `<Providers/>`)
6. readable and predictable

---

### installation

yarn:

```
yarn add griding
```

npm:

```
npm install griding --save
```

---

## usage

this package provides `components`, `hooks` and a `styled-components` helper

### components

#### basic usage (using default options):

```jsx
import { Row, Cell, Provider } from 'griding'

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

---

#### customizing options (breakpoints & column count):

```jsx
import { Row, Cell, Provider } from 'griding'

const breakpoints = {
  hey: { width: 0, gutter: 16 },
  thats: { width: 480, gutter: 24 },
  rad: { width: 768, gutter: 32 },
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

---

### hooks

provides data derived from closest `<Provider/>` and / or `window size`<sup>\*</sup>

<sub>
  *: although the folowing hooks are `ssr` friendly (not breaking the build), the correct result will only return when rendering browser. by default, when `window` is not available, it will fallback to 0, and return/render mobile results.
</sub>

#### `useTheme`

outputs an `object` with:

- `columns`: columns count
- `breakpoints`: breakpoints object as described on Provider

#### `useWindowSize`

outputs an `object` with numeric: `innerHeight` & `innerWidth`

when `ssr`, both will return `0`

#### `useMediaQuery`

receives an object with optional `above` and `below` parameters and returns a boolean. both parameters can be one of:

- a string denoting a breakpoint

- a number of pixels

the default parameters are `below: 0`, `above: Infinity`, therefore, if no parameters are provided, it will always return `true`

#### `useBreakpoints`

returns an array of strings denoting the breakpoint that are visible eg. on a tablet, we should get something like `['xs', 'sm', 'md']`

#### `useCurrentBreakpoint`

returns a string denoting the biggest visible breakpoint, following the example, on a tablet we should get something like `'md'`

---

### helpers

#### `above`

a `media query` helper utility to use inside `styled-components`. receives a string denoting the breakpoint, and a template literal with the `css` that should be rendered:

```jsx
const AboveMD = styled.div`
  display: none;
  ${above('md')`
  display: block;
 `}
`
```

---

### contributing

this repo is open to [`issues`](https://github.com/vitordino/griding/issues) and [`pull requests`](https://github.com/vitordino/griding/pulls)

- [`editorconfig`](https://editorconfig.org/)
- [`gitmoji`](https://gitmoji.carloscuesta.me)

---

#### thanks

<sub>mostly of this lib was done with [@leonardodino](https://github.com/leonardodino) great help and probably wouldn't be possible without it.</sub>

[npm-badge]: https://img.shields.io/npm/v/griding.svg?style=flat-square
[npm]: https://npmjs.org/package/griding
[demo-badge]: https://img.shields.io/badge/www-demo-lightgray.svg?style=flat-square
[demo]: https://griding.vitordino.com/
[build-badge]: https://img.shields.io/travis/vitordino/griding/master.svg?style=flat-square
[build]: https://travis-ci.org/vitordino/griding
[coveralls-badge]: https://img.shields.io/coveralls/vitordino/griding/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/vitordino/griding
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/griding.svg?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=griding
