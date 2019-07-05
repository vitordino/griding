import React from 'react'
import styled from 'styled-components'
import TrafficLights from './TrafficLights'
import { Base as DottedBase } from './Dotted'

const Wrapper = styled(DottedBase)`
	padding: 1.25rem;
	max-width: 100%;
	font-size: 0.875rem;
	position: sticky;
	top: 6.25rem;
	margin-bottom: 2rem;
`

type DottedProps = React.ComponentProps<typeof Wrapper>
const Window: React.FunctionComponent<DottedProps> = props => (
	<Wrapper {...props}>
		<TrafficLights wrapper={Wrapper} />
		{props.children}
	</Wrapper>
)

export default Window
