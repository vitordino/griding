import styled from 'styled-components'

const Title = styled.h1`
	font-size: 2rem;
	color: white;
	font-weight: 500;
	color: #333;
	width: 100%;
	border-bottom: 2px dashed currentColor;
	position: sticky;
	top: 0;
	background: black;
	z-index: 1;
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

export default Title
