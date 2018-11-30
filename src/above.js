import {css} from 'styled-components'
import {breakpoints} from './theme'

export const parseDimension = (value = 0) => {
	const type = typeof value
	if(type === 'number') return value
	if(type !== 'string') return 0
	if(/^\d+px/.test(value)) return parseInt(value, 10)
	if(/^\d+rem/.test(value)) return parseInt(value, 10) * 16
	return 0
}

// Iterate through the breakpoints and create a above template
const above = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label].width}) {
			${css(...args)}
		}
	`
	return acc
}, {})

export default above
