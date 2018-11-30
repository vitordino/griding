import styled from 'styled-components'

const ErrorMessage = styled.pre`
	color: white;
	tab-size: 2;
	overflow: scroll;
	max-width: 100%;
	font-size: 0.875rem;
	color: red;
	display: block;
	::selection{
		background: white;
		color: black;
	}
`

export default ErrorMessage
