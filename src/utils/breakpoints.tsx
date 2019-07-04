import { above } from './above'
import { Breakpoint, Theme } from '../types'

type falsy = false | null | 0 | undefined
type ThemeFn<T> = (breakpoint: Breakpoint, props: T) => string | falsy
type ValueFn<T> = (value: number, props: T) => string | falsy
type Props = { theme: Theme }

export const mapTheme = <T extends Props>(fn: ThemeFn<T>) => (props: T) => {
	const { breakpoints } = props.theme.griding
	return Object.keys(breakpoints).map(
		label => above(label)`${fn(breakpoints[label], props)}`,
	)
}

export const mapBreakpoints = <T extends Props>(fn: ValueFn<T>) => (
	props: T,
) => {
	const { breakpoints } = props.theme.griding
	return Object.keys(props)
		.filter(prop => Object.keys(breakpoints).includes(prop))
		.map(label => above(label)`${fn((props as any)[label], props)}`)
}
