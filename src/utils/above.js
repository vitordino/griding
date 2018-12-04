import {css} from 'styled-components'
import {stringifyDimension, parseDimension} from './dimensions'

// Iterate through the breakpoints and create a above template
const above = breakpoints => Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${stringifyDimension(parseDimension(breakpoints[label].width))}) {
			${css(...args)}
		}
	`
	return acc
}, {})

export default above
