import React from 'react'
import { withTheme } from 'styled-components'
import useMediaQuery from '../hooks/useMediaQuery'

const MediaQuery = props => {
	const visible = useMediaQuery(props)
	const children = props.children || props.render
	if (typeof children === 'function') return children(visible)
	return visible ? children || null : null
}

MediaQuery.defaultProps = { above: 0, below: Infinity }

export default withTheme(MediaQuery)
