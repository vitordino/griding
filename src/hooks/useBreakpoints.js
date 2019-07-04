import React, { useState, useEffect } from 'react'
import useTheme from './useTheme'
import useWindowSize from './useWindowSize'

const getVisibleBreakpoints = (breakpoints, innerWidth) =>
	Object.entries(breakpoints)
		.filter(([_, value]) => value.width < innerWidth)
		.map(([key]) => key)

const useBreakpoints = () => {
	const [state, setState] = useState([])
	const { innerWidth } = useWindowSize()
	const theme = useTheme()

	const breakpoints = theme.griding.breakpoints

	useEffect(() => {
		setState(getVisibleBreakpoints(breakpoints, innerWidth))
	}, [innerWidth])

	return state
}

export default useBreakpoints
