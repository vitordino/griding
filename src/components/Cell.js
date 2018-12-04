import styled from 'styled-components'
import {mapBreakpoints, mapPropsBreakpoints} from '../utils/breakpoints'
import {parse, stringify} from '../utils/dimensions'

const getCellDisplay = p => p.flex ? 'flex' : 'block'

const Cell = styled.div`
	box-sizing: border-box;
	display: ${getCellDisplay};
	${p => mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => `
		padding-left: ${stringify(parse(gutter)/2)};
		padding-right: ${stringify(parse(gutter)/2)};
	`)}
	${p => mapPropsBreakpoints(p.theme.griding.breakpoints, (value, props) => `
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
		width: ${(value / props.theme.griding.columns || 1) * 100 + '%'};
	`)}
`

export default Cell
