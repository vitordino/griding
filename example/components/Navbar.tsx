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

const IconPath = ({
	width = 20,
	height = 20,
	viewBox = `0 0 ${width} ${height}`,
	style = { display: 'block' },
	...props
}: React.ComponentProps<'path'>) => (
	<svg width={width} height={height} viewBox={viewBox} style={style}>
		<path
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}
		/>
	</svg>
)

const LayoutIcon = () => <IconPath d='M1 1h7v18H1zM12 1h7v18h-7z' />
const CodeIcon = () => <IconPath width='24' d='M16 16l6-6-6-6M8 4l-6 6 6 6' />

const Title = styled.h1`
	font-size: 1.75rem;
	font-weight: 500;
	flex: 1;
	color: white;
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

const Button = styled(Anchor).attrs({ as: 'button' })<{ horizontal: boolean }>`
	appearance: none;
	background: none;
	border: 0;
	cursor: pointer;
	display: none;
	@media (min-width: 62rem) {
		display: flex;
	}
	${p => p.horizontal && `transform: rotate(90deg);`}
`

type NavbarProps = { title: string; horizontal: boolean; toggle: () => any }
const Navbar = ({ title, horizontal, toggle }: NavbarProps) => (
	<Wrapper>
		<Title>{title}</Title>
		<Anchor href='https://github.com/vitordino/griding' target='_blank'>
			<CodeIcon />
		</Anchor>
		<Button onClick={toggle} horizontal={horizontal}>
			<LayoutIcon />
		</Button>
	</Wrapper>
)

export default Navbar
