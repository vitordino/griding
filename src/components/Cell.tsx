import styled from 'styled-components'
import { mapTheme, mapBreakpoints } from 'etymos'

const getCellDisplay = (p: { flex?: boolean }) => (p.flex ? 'flex' : 'block')
const Cell = styled.div<Partial<{ [key: string]: any }> & { flex?: boolean }>`
	box-sizing: border-box;
	display: ${getCellDisplay};
	${mapTheme(
		({ gutter }) =>
			gutter &&
			`
		padding-left: ${gutter / 2}px;
		padding-right: ${gutter / 2}px;
	`,
	)}
	${mapBreakpoints(
		(value, props) => `
		width: ${(value / props.theme.columns || 1) * 100 + '%'};
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
	`,
	)}
`

export default Cell
