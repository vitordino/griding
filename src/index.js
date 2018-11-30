import styled, {css} from 'styled-components'
import {breakpoints, columns} from './theme'
import above from './above'

export const mapBreakpoints = fn => Object.keys(breakpoints)
	.map(label => above[label]`${fn(breakpoints[label])}`)

export const mapPropsBreakpoints = fn => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => above[label]`${fn(props[label], props)}`)

const getCellDisplay = p => p.flex ? 'flex' : 'block'

export const Cell = styled.div`
	box-sizing: border-box;
	display: ${getCellDisplay};
	${mapBreakpoints(({gutter}) => `
		padding-left: ${gutter/2 + 'rem'};
		padding-right: ${gutter/2 + 'rem'};
	`)}
	${mapPropsBreakpoints((value, props) => `
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
		width: ${(value / columns || 1) * 100 + '%'};
	`)}
`

export const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${mapBreakpoints(({gutter}) => `
		margin-left: ${gutter/-2 + 'rem'};
		margin-right: ${gutter/-2 + 'rem'};
		max-width: calc(100% + ${gutter + 'rem'});
	`)}
	${p => p['vertical-gutter'] && mapBreakpoints(({gutter}) => css`
		margin: ${gutter/-2 + 'rem'};
		& ${Cell} {padding: ${gutter/2 + 'rem'};}
	`)}
`

Row.Cell = Cell

export default Row
