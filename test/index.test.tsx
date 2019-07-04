import React from 'react'
import styled from 'styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import {
	Provider,
	Row,
	Cell,
	MediaQuery,
	useTheme,
	useWindowSize,
	useMediaQuery,
	useBreakpoints,
	useCurrentBreakpoint,
	above,
} from '../src'

const StyledAbove = styled.div`
	display: none;
	${above('md')`
		display: block;
	`}
`

const Test = () => {
	const theme = useTheme()
	const windowSize = useWindowSize()
	const mediaQuery = useMediaQuery({ above: 'md' })
	const breakpoints = useBreakpoints()
	const currentBreakpoint = useCurrentBreakpoint()
	return (
		<Row>
			<Cell xs={12} sm={6} md={4} lg={3} xg={2}>
				<pre>columns: {theme.griding.columns}</pre>
				<pre>window size: {JSON.stringify(windowSize)}</pre>
				<pre>window size: {JSON.stringify(windowSize)}</pre>
				<pre>{mediaQuery ? 'above' : 'below'}</pre>
				<pre>visible breakpoints {JSON.stringify(breakpoints)}</pre>
				<pre>current breakpoint {JSON.stringify(currentBreakpoint)}</pre>
				<StyledAbove>styled above</StyledAbove>
			</Cell>
			<MediaQuery above='md'>
				<Cell xs={12} sm={6} md={4} lg={3} xg={2}>
					lorem ipsum above
				</Cell>
			</MediaQuery>
			<MediaQuery below='md'>
				<Cell xs={12} sm={6} md={4} lg={3} xg={2}>
					lorem ipsum below
				</Cell>
			</MediaQuery>
		</Row>
	)
}

describe('Griding', () => {
	let node: Element

	beforeEach(() => {
		node = document.createElement('div')
	})

	afterEach(() => {
		unmountComponentAtNode(node)
	})

	it('renders without breaking', () => {
		render(
			<Provider>
				<Test />
			</Provider>,
			node,
			() => {
				expect(node.innerHTML).toContain('lorem ipsum')
			},
		)
	})
})
