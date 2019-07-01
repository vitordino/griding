import { above } from './above'

export const mapTheme = fn => props => {
	const breakpoints = props.theme.griding.breakpoints
	return Object.keys(breakpoints)
		.map(label => above(label)`${fn(breakpoints[label], props)}`)
}

export const mapBreakpoints = fn => props => {
	const breakpoints = props.theme.griding.breakpoints
	return Object.keys(props)
		.filter(prop => Object.keys(breakpoints).includes(prop))
		.map(label => above(label)`${fn(props[label], props)}`)
}
