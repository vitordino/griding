import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import Editor from './components/Editor'
import Container from './components/Container'
import Title from './components/Title'
import Dotted from './components/Dotted'
import ErrorMessage from './components/ErrorMessage'
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

const scope = {styled, leftPad, twelve, Row, Cell, Dotted}

const code =
`//twelve = ['01', '02', ..., '12']

<Row vertical-gutter>
	{twelve.map(x => (
    <Cell xs={6} md={4} lg={3} xg={2} key={x}>
      <Dotted>{x}</Dotted>
    </Cell>
  ))}
</Row>
`

const App = () => (
	<LiveProvider code={code} scope={scope}>
		<Wrapper>
			<Container>
				<Title><a href={repo}>skr</a></Title>
				<Row style={{alignItems: 'stretch', paddingTop: '1.875rem'}}>
					<Cell xs={12} lg={6}>
						<Editor/>
					</Cell>
					<Cell xs={12} lg={6}>
						<ErrorMessage><LiveError/></ErrorMessage>
						<LivePreview/>
					</Cell>
				</Row>
			</Container>
		</Wrapper>
	</LiveProvider>
)

render(<App/>, document.querySelector('#demo'))
