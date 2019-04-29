import {utility} from './above'

export const mapBreakpoints = (breakpoints, fn) => Object.keys(breakpoints)
	.map(label => utility(breakpoints)[label]`${fn(breakpoints[label])}`)

export const mapPropsBreakpoints = (breakpoints, fn) => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => utility(breakpoints)[label]`${fn(props[label], props)}`)
