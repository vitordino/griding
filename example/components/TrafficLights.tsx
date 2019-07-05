import React from 'react'
import styled, { css, StyledComponent } from 'styled-components'

const getActiveSelector = (selector: string) => ({ wrapper }: Props) => css`
	${wrapper}:focus-within &${selector},
	${wrapper}:hover &${selector},
	${wrapper}:active &${selector}
`

type Props = { wrapper: StyledComponent<any, any> | string }
const TrafficLights = styled.div.attrs({ children: <span /> })<Props>`
	padding-bottom: 1rem;
	display: flex;
	&:before,
	& span,
	&:after {
		content: '';
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 50%;
		margin-right: 0.5rem;
		border: 1px solid currentColor;
	}
	${getActiveSelector('::before')} {
		background-color: #f85955;
		border-color: #d74246;
	}
	${getActiveSelector(' span')} {
		background-color: #fbbe3f;
		border-color: #d7a32d;
	}
	${getActiveSelector('::after')} {
		background-color: #45cc4b;
		border-color: #40ad36;
	}
`

export default TrafficLights
