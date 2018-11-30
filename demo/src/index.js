import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Row, Cell} from '../../src'
import './reset.css'

const repo = 'https://github.com/vitordino/skr'
const leftPad = s => (s+'').length == 1 ? '0'+s : s
const twelve = Array.from({length: 12}, (v, i) => leftPad(i+1))


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: black;
`

const Container = styled.div`
	flex: 1;
	overflow: hidden;
	display: flex;
	align-items: center;
	margin: auto;
	width: 100%;
	max-width: 64rem;
	padding: 1rem;
`

const Title = styled.h1`
	font-size: 2rem;
	color: white;
	font-weight: 500;
	color: #333;
	width: 100%;
	border-bottom: 2px dashed currentColor;
	position: relative;
	a{
		user-select: none;
		display: block;
		text-decoration: none;
		color: currentColor;
	}
	&:before{
		transition: 0.5s all;
		content: '';
		background: currentColor;
		position: absolute;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 1px;
		bottom: -0.25rem;
		left: 0.375rem;
		transform: rotate(45deg);
		transform-origin: center;
	}
	&:hover{
		color: white;
		&:before{
			left: calc(100% - 0.75rem);
		}
	}
`

const Dotted = styled.code`
	border: 0.125rem dashed currentColor;
	color: white;
	border-radius: 0.25rem;
	display: block;
	font-size: 0.75rem;
	font-weight: 700;
	text-align: center;
	padding: 1rem 0;
	position: relative;
	user-select: none;
	color: #333;
	&:before, &:after{
		transition: 0.2s all;
		content: '';
		background: currentColor;
		position: absolute;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 1px;
		transform: rotate(45deg);
		transform-origin: center;
	}
	&:before{
		top: -0.25rem;
		left: 0.25rem;
	}
	&:after{
		bottom: -0.25rem;
		right: 0.25rem;
	}
	&:hover{
		border-style: solid;
		color: white;
		&:before{
			transform: rotate(45deg) translateY(11.5px);
		}
		&:after{
			transform: rotate(45deg) translateY(-11.5px);
		}
	}
`

const Pre = styled.pre`
	color: white;
	tab-size: 2;
	overflow: scroll;
	max-width: 100%;
	font-size: 0.875rem;
	color: #333;
	padding: 1rem 0;
	display: block;
	&:hover{
		color: white;
	}
	::selection{
		background: white;
		color: black;
	}
`

const code = `
import {Row, Cell} from 'skr'

const Example = () => (
	<Row vertical-gutter>
		{twelve.map(x => (
			<Cell key={x} xs={12} sm={6} md={4} lg={3} xg={2}>
				<Dotted>{x}</Dotted>
			</Cell>
		))}
	</Row>
)
`

const Example = () => (
	<Row vertical-gutter>
		{twelve.map(x => (
			<Cell key={x} xs={12} sm={6} md={4} lg={3} xg={2}>
				<Dotted>{x}</Dotted>
			</Cell>
		))}
	</Row>
)

const App = () => (
	<Wrapper>
		<Container>
			<Title><a href={repo}>skr</a></Title>
		</Container>
		<Container>
			<Pre>{code}</Pre>
		</Container>
		<Container>
			<Example/>
		</Container>
	</Wrapper>
)

render(<App/>, document.querySelector('#demo'))
