import styled, {css} from 'styled-components'
import {mapBreakpoints} from '../utils/breakpoints'
import Cell from './Cell'

const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${p => mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => `
		margin-left: ${gutter/-2 + 'px'};
		margin-right: ${gutter/-2 + 'px'};
		max-width: calc(100% + ${gutter + 'px'});
	`)}
	${p => p['vertical-gutter'] && (
		mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => css`
			margin: ${gutter/-2 + 'px'};
			& ${Cell} {padding: ${gutter/2 + 'px'};}
		`)
	)}
`

export default Row
