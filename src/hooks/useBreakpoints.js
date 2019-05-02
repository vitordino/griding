import React, {useState, useEffect} from 'react'
import useTheme from './useTheme'
import useWindowSize from './useWindowSize'
import {parse} from '../utils/dimensions'

const getVisibleBreakpoints = (breakpoints, innerWidth) => (
	Object.entries(breakpoints)
		.filter(([_, value]) => parseFloat(value.width)*16 < innerWidth)
		.map(([key]) => key)
)

const useBreakpoints = () => {
	const [state, setState] = useState([])
	const {innerWidth} = useWindowSize()
	const theme = useTheme()

	const breakpoints = theme.griding.breakpoints

	useEffect(() => {
		setState(getVisibleBreakpoints(breakpoints, innerWidth))
	}, [innerWidth])

	return state
}

export default useBreakpoints
