import styled, {css} from 'styled-components'
import {mapBreakpoints} from '../utils/breakpoints'
import {parseDimension, stringifyDimension} from '../utils/dimensions'
import Cell from './Cell'

const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${p => mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => `
		margin-left: ${stringifyDimension(parseDimension(gutter)/-2)};
		margin-right: ${stringifyDimension(parseDimension(gutter)/-2)};
		max-width: calc(100% + ${stringifyDimension(parseDimension(gutter))});
	`)}
	${p => p['vertical-gutter'] && (
		mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => css`
			margin: ${stringifyDimension(parseDimension(gutter)/-2)};
			& ${Cell} {padding: ${stringifyDimension(parseDimension(gutter)/2)};}
		`)
	)}
`

export default Row
