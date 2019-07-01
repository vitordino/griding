import { above } from './above'

export const mapBreakpoints = (breakpoints, fn) => Object.keys(breakpoints)
	.map(label => above(label)`${fn(breakpoints[label])}`)

export const mapPropsBreakpoints = fn => props => {
	const breakpoints = props.theme.griding.breakpoints
	return Object.keys(props)
		.filter(prop => Object.keys(breakpoints).includes(prop))
		.map(label => above(label)`${fn(props[label], props)}`)
}
