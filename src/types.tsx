type CssConstraint = number | string

export type Breakpoint = { width: CssConstraint; gutter?: number }
export type Breakpoints = { [key: string]: Breakpoint }
export type GridingOptions = { columns: number; breakpoints: Breakpoints }
export type Theme = { griding: GridingOptions }

export type Constraints = { above?: CssConstraint; below?: CssConstraint }

export type renderProps<T = undefined> = {
	render?: (arg: T) => React.ReactNode
	children?: React.ReactNode | ((arg: T) => React.ReactNode)
}
