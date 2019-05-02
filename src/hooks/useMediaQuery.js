import React, {useState, useEffect} from 'react'
import useTheme from './useTheme'
import useWindowSize from './useWindowSize'
import {parse} from '../utils/dimensions'

const useMediaQuery = ({above = 0, below = Infinity}) => {
	const theme = useTheme()
	const {innerWidth} = useWindowSize()
	const [visible, setVisible] = useState(true)

	const breakpoints = theme.griding.breakpoints
	const {width: aboveWidth} = breakpoints[above] || {width: above || 0}
	const {width: belowWidth} = breakpoints[below] || {width: below || 0}

	const condition = (
		innerWidth >= parse(aboveWidth) &&
		innerWidth < parse(belowWidth)
	)

	useEffect(() => {setVisible(condition)}, [innerWidth])

	return visible
}

export default useMediaQuery