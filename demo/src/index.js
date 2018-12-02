import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import {Row, Cell, GridingProvider} from '../../src'
import useToggle from './utils/useToggle'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Dotted from './components/Dotted'
import Footer from './components/Footer'
import ErrorMessage from './components/ErrorMessage'
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
    <Cell xs={6} sm={4} md={3} lg={2} key={x}>
      <Dotted>{x}</Dotted>
    </Cell>
  ))}
</Row>
`

const App = () => {
	const [horizontal, toggle] = useToggle(true)
	return(
		<GridingProvider>
			<LiveProvider code={code} scope={scope}>
				<Wrapper>
					<Container>
						<Navbar
							title='skr'
							to={repo}
							toggle={toggle}
							horizontal={horizontal}
						/>
						<Row style={{alignItems: 'stretch', paddingTop: '1.875rem'}}>
							<Cell xs={12} lg={horizontal ? 6 : 12}>
								<Editor/>
							</Cell>
							<Cell xs={12} lg={horizontal ? 6 : 12}>
								<ErrorMessage><LiveError/></ErrorMessage>
								<Preview/>
							</Cell>
						</Row>
					</Container>
					<Footer/>
				</Wrapper>
			</LiveProvider>
		</GridingProvider>
	)
}

render(<App/>, document.querySelector('#demo'))
