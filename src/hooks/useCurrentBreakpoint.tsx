import { useState, useEffect } from 'react'
import useBreakpoints from './useBreakpoints'

const getCurrent = (breakpoints: string[]) => (breakpoints || []).reverse()[0]

const useCurrentBreakpoints = () => {
	const [state, setState] = useState<string>()
	const breakpoints = useBreakpoints()
	useEffect(() => {
		setState(getCurrent(breakpoints))
	}, [breakpoints])
	return state
}

export default useCurrentBreakpoints
