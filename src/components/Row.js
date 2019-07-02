import styled from 'styled-components'
import {mapTheme} from '../utils/breakpoints'
import Cell from './Cell'

const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${mapTheme(({gutter}, props) => gutter && !props['vertical-gutter'] && `
		margin-left: ${gutter/-2}px;
		margin-right: ${gutter/-2}px;
		max-width: calc(100% + ${gutter}px);
	`)}
	${mapTheme(({gutter}, props) => gutter && props['vertical-gutter'] && `
		margin: ${gutter/-2}px;
		& ${Cell} {padding: ${gutter/2}px;}
	`)}
`

export default Row
