import { css } from 'styled-components'

// Use a string to generate media query based on breakpoints keys
export const above = label => (...args) => ({ theme }) => css`
	@media (min-width: ${theme.griding.breakpoints[label].width}px) {
		${css(...args)}
	}
`

export default above
