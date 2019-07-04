import { useState, useEffect } from 'react'
import useTheme from './useTheme'
import useWindowSize from './useWindowSize'
import { Breakpoints } from 'types'

const getVisibleBreakpoints = (breakpoints: Breakpoints, innerWidth: number) =>
	Object.keys(breakpoints).filter(key => breakpoints[key].width < innerWidth)

const useBreakpoints = () => {
	const [state, setState] = useState<string[]>([])
	const { innerWidth } = useWindowSize()
	const theme = useTheme()

	const breakpoints = theme.griding.breakpoints as Breakpoints

	useEffect(() => {
		setState(getVisibleBreakpoints(breakpoints, innerWidth))
	}, [innerWidth])

	return state
}

export default useBreakpoints
