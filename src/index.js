import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'
import {columns, breakpoints} from './theme'
import above from './above'

const mapBreakpoints = (breakpoints, fn) => Object.keys(breakpoints)
	.map(label => above(breakpoints)[label]`${fn(breakpoints[label])}`)

const mapPropsBreakpoints = (breakpoints, fn) => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => above(breakpoints)[label]`${fn(props[label], props)}`)

const getCellDisplay = p => p.flex ? 'flex' : 'block'

export const GridingProvider = ({children, ...props}) => (
	<ThemeProvider theme={{griding: Object.assign({}, {columns, breakpoints}, props.theme)}}>
		{children}
	</ThemeProvider>
)

export const Cell = styled.div`
	box-sizing: border-box;
	display: ${getCellDisplay};
	${p => mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => `
		padding-left: ${gutter/2 + 'px'};
		padding-right: ${gutter/2 + 'px'};
	`)}
	${p => mapPropsBreakpoints(p.theme.griding.breakpoints, (value, props) => `
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
		width: ${(value / props.theme.griding.columns || 1) * 100 + '%'};
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
		margin-left: ${gutter/-2 + 'px'};
		margin-right: ${gutter/-2 + 'px'};
		max-width: calc(100% + ${gutter + 'px'});
	`)}
	${p => p['vertical-gutter'] && mapBreakpoints(p.theme.griding.breakpoints, ({gutter}) => css`
		margin: ${gutter/-2 + 'px'};
		& ${Cell} {padding: ${gutter/2 + 'px'};}
	`)}
`

Row.Cell = Cell

export default Row
