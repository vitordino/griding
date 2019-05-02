import React, {useState, useEffect} from 'react'
import useBreakpoints from './useBreakpoints'

const getCurrent = breakpoints => (breakpoints || []).reverse()[0]

const useCurrentBreakpoints = () => {
	const [state, setState] = useState([])
	const breakpoints = useBreakpoints()
	useEffect(() => {setState(getCurrent(breakpoints))}, [breakpoints])
	return state
}

export default useCurrentBreakpoints
