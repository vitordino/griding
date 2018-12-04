import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {GridingProvider, Row, Cell} from '../src/'

describe('Griding', () => {
	let node

	beforeEach(() => {
		node = document.createElement('div')
	})

	afterEach(() => {
		unmountComponentAtNode(node)
	})

	it('renders without breaking', () => {
		render(
			<GridingProvider>
				<Row>
					<Cell xs={12} sm={6} md={4} lg={3} xg={2}>
						lorem ipsum
					</Cell>
				</Row>
			</GridingProvider>
			, node, () => {
			expect(node.innerHTML).toContain('lorem ipsum')
		})
	})
})
