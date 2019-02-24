import React from 'react'
import styled from 'styled-components'
import {LiveEditor} from 'react-live'
import dots from '../utils/dots'

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
		border: 1px solid #333;
	}
`

const Wrapper = styled.div`
	border: 2px dashed #333;
	background: black;
	box-shadow: 0 1.25rem 4rem rgba(0,0,0,.55);
	border-radius: 0.25rem;
	padding: 1.25rem;
	max-width: 100%;
	font-size: 0.875rem;
	color: #333;
	position: sticky;
	top: 6.25rem;
	margin-bottom: 2rem;
	${dots}
	&:focus-within, &:hover, &:active{
		border-color: white;
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

const Import = () => (
	<pre className='prism-code' style={{background: 'none', overflow: 'scroll'}}>
		<span className='token keyword'>import </span>
		<span className='token punctuation'>{`{ `}</span>
		<span>Provider</span>
		<span className='token punctuation'>{`, `}</span>
		<span>Row</span>
		<span className='token punctuation'>{`, `}</span>
		<span>Cell</span>
		<span className='token punctuation'>{` }`}</span>
		<span className='token keyword'> from </span>
		<span className='token string'>'griding'</span>
	</pre>
)

const Editor = props => (
	<Wrapper>
		<Tab><span/></Tab>
		<Import/>
		<LiveEditor {...props} style={{background: 'none', overflow: 'scroll'}}/>
	</Wrapper>
)

export default Editor
