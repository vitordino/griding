import styled from 'styled-components'
import {mapTheme, mapBreakpoints} from '../utils/breakpoints'

const getCellDisplay = p => p.flex ? 'flex' : 'block'

const Cell = styled.div`
	box-sizing: border-box;
	display: ${getCellDisplay};
	${mapTheme(({gutter}) => `
		padding-left: ${gutter / 2}px;
		padding-right: ${gutter / 2}px;
	`)}
	${mapBreakpoints((value, props) => `
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
		width: ${(value / props.theme.griding.columns || 1) * 100 + '%'};
	`)}
`

export default Cell
