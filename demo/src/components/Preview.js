import React from 'react'
import styled from 'styled-components'
import {LivePreview} from 'react-live'
import dots from '../utils/dots'
import {Row, Cell} from '../../../src'

const twelve = Array.from({length: 12}, (x, i) => i)

const Tab = styled.div`
	padding-bottom: 1rem;
	display: block;
	&:before, & span, &:after {
		content: '';
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 100%;
		margin-right: 0.5rem;
		display: inline-block;
		border: 1px solid #aaa;
	}
`

const Wrapper = styled.div`
	border: 2px dashed currentColor;
	box-shadow: 0 1.25rem 4rem rgba(0,0,0,.55);
	border-radius: 0.25rem;
	padding: 1.25rem;
	max-width: 100%;
	font-size: 0.875rem;
	color: #aaa;
	background: white;
	position: sticky;
	top: 5rem;
	${dots({hover: '#aaa'})}
	&:focus-within, &:hover, &:active{
		${Tab}:before {
			background-color: #f85955;
			border: 1px solid #d74246;
		}
		${Tab} span {
			background-color: #fbbe3f;
			border: 1px solid #d7a32d;
		}
		${Tab}:after {
			background-color: #45cc4b;
			border: 1px solid #40ad36;
		}
	}
`

const GridWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	pointer-events: none;
`

const Marker = styled.div`
	height: 100%;
	background: rgba(0,0,238, 0.06);
`

const Grid = () => (
	<GridWrapper>
		<Row style={{height: '100%'}}>
			{twelve.map(x => (
				<Cell xs={1} style={{height: '100%'}}><Marker/></Cell>
			))}
		</Row>
	</GridWrapper>
)

const Preview = props => (
	<Wrapper>
		<Tab><span/></Tab>
		<div style={{position: 'relative', padding: '1rem 0'}}>
			<LivePreview {...props}/>
			<Grid/>
		</div>
	</Wrapper>
)

export default Preview
