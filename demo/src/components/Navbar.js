import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
	display: flex;
	align-items: stretch;
	color: #333;
	border-bottom: 2px dashed currentColor;
	position: sticky;
	top: 0;
	background: black;
	z-index: 1;
	padding: 0.5rem 0 0.375rem;
`

const Button = styled.button`
	appearance: none;
	background: none;
	color: currentColor;
	border: 0;
	cursor: pointer;
	outline: none;
	display: none;
	@media (min-width: 62rem) {
		display: block;
	}
`

const Icon = props => (
	<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path
			d='M1 1h7v18H1zM12 1h7v18h-7z'
			stroke='currentColor'
			strokeWidth='2'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const CodeIcon = props => (
	<svg width='24' height='20' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path
			d='M16 16l6-6-6-6M8 4l-6 6 6 6'
			stroke='currentColor'
			strokeWidth='2'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const Title = styled.h1`
	font-size: 1.75rem;
	font-weight: 500;
	flex: 1;
	color: white;
`

const IconWrapper = styled.div`
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	${p =>
		p.horizontal &&
		`
		transform: rotate(90deg);
	`}
`

const Anchor = styled.a`
	display: block;
	text-decoration: none;
	color: currentColor;
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		color: white;
	}
`

const Navbar = ({ title, horizontal, toggle }) => (
	<Wrapper>
		<Title>{title}</Title>
		<Anchor href='https://github.com/vitordino/griding'>
			<CodeIcon style={{ display: 'block' }} />
		</Anchor>
		<Button onClick={toggle}>
			<IconWrapper horizontal={horizontal}>
				<Icon style={{ display: 'block' }} />
			</IconWrapper>
		</Button>
	</Wrapper>
)

export default Navbar
