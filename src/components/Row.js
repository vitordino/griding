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
	${mapBreakpoints(({gutter}, props) => !props['vertical-gutter'] && `
		margin-left: ${gutter/-2}px;
		margin-right: ${gutter/-2}px;
		max-width: calc(100% + ${gutter}px);
	`)}
	${mapBreakpoints(({gutter}, props) => props['vertical-gutter'] && css`
		margin: ${stringify(parse(gutter)/-2)};
		& ${Cell} {padding: ${stringify(parse(gutter)/2)};}
	`)}
`

export default Row
