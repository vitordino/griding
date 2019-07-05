import React, { useState } from 'react'
import { render } from 'react-dom'
import styled, { createGlobalStyle as css } from 'styled-components'
import { LiveProvider, LiveError } from 'react-live'
import { Row, Cell, Provider } from '../src'
import { name } from '../package.json'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Dotted from './components/Dotted'
import Footer from './components/Footer'
import ErrorMessage from './components/ErrorMessage'
import 'minireset.css'

const useToggle = (initialState: boolean) => {
	const [state, setState] = useState(initialState)
	const toggle = () => setState(state => !state)
	return [state, toggle] as const
}

const GlobalStyle = css`
	html {
		background: black;
		font: 16px/1.5 'SF Pro Text', 'Helvetica Neue', 'Helvetica', -apple-system,
			BlinkMacSystemFont, Roboto, Arial, sans-serif, 'SF Pro Icons',
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
	}
	::selection {
		background: rgba(255, 255, 255, 0.99);
		color: rgba(0, 0, 0, 0.99);
	}
	pre,
	code {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono',
			'Droid Sans Mono', 'Source Code Pro', monospace;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: black;
`

const leftPad = (s: number) => ((s + '').length == 1 ? '0' + s : s).toString()

const scope = { leftPad, styled, Provider, Row, Cell, Dotted }

const code = `
// grid options (number of columns and breakpoints)
// can be passed as props to Provider

const App = () => (
	<Provider>
		<Row vertical-gutter>
			{twelve.map(x => (
				<Cell xs={6} sm={4} md={3} lg={2} key={x}>
					<Dotted>{x}</Dotted>
				</Cell>
			))}
		</Row>
	</Provider>
)

const twelve = Array.from(
	{length: 12},
	(_, i) => leftPad(i + 1)
)

render(App)`.replace(/\t/g, '  ')

const App = () => {
	const [horizontal, toggle] = useToggle(true)
	return (
		<Provider>
			<LiveProvider code={code} scope={scope} noInline>
				<Wrapper>
					<GlobalStyle />
					<Container>
						<Navbar title={name} toggle={toggle} horizontal={horizontal} />
						<Row style={{ alignItems: 'stretch', paddingTop: '2rem' }}>
							<Cell xs={12} lg={horizontal ? 6 : 12}>
								<Editor />
							</Cell>
							<Cell xs={12} lg={horizontal ? 6 : 12}>
								<ErrorMessage>
									<LiveError />
								</ErrorMessage>
								<Preview />
							</Cell>
						</Row>
					</Container>
					<Footer />
				</Wrapper>
			</LiveProvider>
		</Provider>
	)
}

render(<App />, document.querySelector('#root'))
