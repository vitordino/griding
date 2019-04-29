import {css} from 'styled-components'
import {stringify, parse} from './dimensions'

// Iterate through the breakpoints and create a above template
export const utility = breakpoints => (
	Object.keys(breakpoints).reduce((acc, label) => {
		acc[label] = (...args) => css`
			@media (min-width: ${stringify(parse(breakpoints[label].width))}) {
				${css(...args)}
			}
		`
		return acc
	}, {})
)

// Use a string to generate media query based on breakpoints keys
export const above = (label) => (...args) => ({theme}) => css`
	@media (min-width: ${stringify(parse(theme.breakpoints[label].width))}) {
		${css(...args)}
	}
`

export default above
