import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const Wrapper = styled.footer`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	border-top: 2px dashed #333;
	margin-top: 4rem;
`

const A = styled.a`
	display: block;
	color: #333;
	padding: 1rem 0;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 500;
	letter-spacing: 0.025rem;
	&:hover {
		color: white;
	}
`

const Footer = () => (
	<Container>
		<Wrapper>
			<A href='https://kunst.com.br'>kunst</A>
			<A href='https://vitordino.com'>vitor dino</A>
		</Wrapper>
	</Container>
)

export default Footer
