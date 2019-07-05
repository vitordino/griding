import React from 'react'
import styled from 'styled-components'
import { LivePreview } from 'react-live'
import { Row, Cell } from '../../src'
import Window from './Window'

const twelve = Array.from({ length: 12 }, (x, i) => i)

const BlueprintWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	pointer-events: none;
	opacity: 0;
	transition: 0.2s all;
`

const Wrapper = styled(Window)`
	&:focus-within,
	&:hover,
	&:active {
		${BlueprintWrapper} {
			opacity: 1;
		}
	}
`

const Marker = styled.div`
	height: 100%;
	background: rgba(0, 0, 238, 0.06);
`

const Blueprint = () => (
	<BlueprintWrapper>
		<Row style={{ height: '100%' }}>
			{twelve.map(x => (
				<Cell xs={1} key={x} style={{ height: '100%' }}>
					<Marker />
				</Cell>
			))}
		</Row>
	</BlueprintWrapper>
)

const Preview = () => (
	<Wrapper>
		<div style={{ position: 'relative', padding: '1rem 0' }}>
			<LivePreview />
			<Blueprint />
		</div>
	</Wrapper>
)

export default Preview
