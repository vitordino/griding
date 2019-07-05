import styled from 'styled-components'

const dots = `
	position: relative;
	&:before, &:after {
		transition: 0.2s all;
		content: '';
		background: currentColor;
		position: absolute;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 1px;
		transform: rotate(45deg);
		transform-origin: center;
	}
	&:before { top: -0.25rem; left: 0.25rem; }
	&:after { bottom: -0.25rem; right: 0.25rem; }
	&:focus-within, &:hover, &:active {
		border-style: solid;
		&:before { transform: rotate(45deg) translateY(11.5px); }
		&:after { transform: rotate(45deg) translateY(-11.5px); }
	}
`

type BaseProps = { background?: string; inactive?: string; active?: string }

export const Base = styled.div<BaseProps>`
	border: 0.125rem dashed currentColor;
	border-radius: 0.25rem;
	display: block;
	color: ${p => p.inactive || '#aaa'};
	background: ${p => p.background || '#fff'};
	${dots}
	&:focus-within, &:hover, &:active {
		color: ${p => p.active || p.inactive || '#aaa'};
	}
`

const Dotted = styled(Base).attrs({ as: 'code', active: '#333' })`
	font-size: 0.75rem;
	font-weight: 700;
	text-align: center;
	padding: 1rem 0;
	user-select: none;
	cursor: pointer;
`

export default Dotted
