import styled from 'styled-components'
import dots from '../utils/dots'

const Dotted = styled.code`
	border: 0.125rem dashed currentColor;
	border-radius: 0.25rem;
	display: block;
	font-size: 0.75rem;
	font-weight: 700;
	text-align: center;
	padding: 1rem 0;
	position: relative;
	user-select: none;
	color: #aaa;
	background: white;
	cursor: pointer;
	${dots({hover: '#333'})}
`

export default Dotted
