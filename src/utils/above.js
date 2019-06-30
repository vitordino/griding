import {css} from 'styled-components'
import {stringify, parse} from './dimensions'

// Use a string to generate media query based on breakpoints keys
export const above = (label) => (...args) => ({theme}) => css`
	@media (min-width: ${stringify(parse(theme.griding.breakpoints[label].width))}) {
		${css(...args)}
	}
`

export default above
