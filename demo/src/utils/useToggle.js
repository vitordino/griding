import { useState } from 'react'

const useToggle = initialState => {
	const [state, setState] = useState(initialState)
	const toggle = () => setState(state => !state)
	return [state, toggle]
}

export default useToggle
