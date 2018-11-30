import React from 'react'
import styled from 'styled-components'
import above from '../../../src/above'

const Wrapper = styled.nav`
	display: flex;
	align-items: stretch;
	color: #333;
	border-bottom: 2px dashed currentColor;
	position: sticky;
	top: 0;
	background: black;
	z-index: 1;
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

const Button = styled.button`
	appearance: none;
	background: none;
	color: currentColor;
	border: 0;
	cursor: pointer;
	outline: none;
	display: none;
	${above.lg`
		display: block;
	`}
`

const Icon = () => (
	<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
		<g stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
			<path d="M1 1h7v18H1zM12 1h7v18h-7z"/>
		</g>
	</svg>
)

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 500;
	flex: 1;
	a{
		user-select: none;
		display: block;
		text-decoration: none;
		color: currentColor;
	}
`

const IconWrapper = styled.div`
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	${p => p.horizontal && `
		transform: rotate(90deg);
	`}
`

const Navbar = ({title, href, horizontal, toggle}) => (
	<Wrapper>
		<Title>
			<a href={href}>{title}</a>
		</Title>
		<Button onClick={toggle}>
			<IconWrapper horizontal={horizontal}>
				<Icon/>
			</IconWrapper>
		</Button>
	</Wrapper>
)

export default Navbar
