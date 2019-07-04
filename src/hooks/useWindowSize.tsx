import { useState, useEffect } from 'react'

const w = typeof window !== 'undefined'

const getSize = () => ({
	innerHeight: w ? window.innerHeight : 0,
	innerWidth: w ? window.innerWidth : 0,
})

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(getSize)
	const handleResize = () => setWindowSize(getSize)

	useEffect(() => {
		if (!w) return
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

export default useWindowSize
