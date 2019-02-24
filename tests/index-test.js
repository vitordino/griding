import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {Provider, Row, Cell} from '../src/'

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
			<Provider>
				<Row>
					<Cell xs={12} sm={6} md={4} lg={3} xg={2}>
						lorem ipsum
					</Cell>
				</Row>
			</Provider>
			, node, () => {
			expect(node.innerHTML).toContain('lorem ipsum')
		})
	})
})
