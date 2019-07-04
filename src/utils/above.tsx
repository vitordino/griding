import { css } from 'styled-components'
import { Theme } from '../types'

// Use a string to generate media query based on breakpoints keys
type A = Parameters<typeof css>
type Props = { theme: Theme }
export const above = (label: string) => (...args: A) => (props: Props) => css`
	@media (min-width: ${props.theme.griding.breakpoints[label].width}px) {
		${css(...args)}
	}
`

export default above
