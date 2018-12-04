import styled, {css} from 'styled-components'
import {mapBreakpoints} from '../utils/breakpoints'
import {parse, stringify} from '../utils/dimensions'
import Cell from './Cell'

const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${p => mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => `
		margin-left: ${stringify(parse(gutter)/-2)};
		margin-right: ${stringify(parse(gutter)/-2)};
		max-width: calc(100% + ${stringify(parse(gutter))});
	`)}
	${p => p['vertical-gutter'] && (
		mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => css`
			margin: ${stringify(parse(gutter)/-2)};
			& ${Cell} {padding: ${stringify(parse(gutter)/2)};}
		`)
	)}
`

export default Row
