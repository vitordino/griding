import React from 'react'
import {withTheme} from 'styled-components';
import windowSize from 'react-window-size'
import {parse} from '../utils/dimensions'


const getVisibility = ({theme, above, below, windowWidth}) => {
	const breakpoints = theme.griding.breakpoints
	const {width: aboveWidth} = breakpoints[above] || {width: above || 0}
	const {width: belowWidth} = breakpoints[below] || {width: below || 0}
	return windowWidth >= parse(aboveWidth) && windowWidth < parse(belowWidth)
}

const MediaQuery = props => {
	const visible = getVisibility(props)
	const children = props.children || props.render
	if(typeof children === 'function') return children(visible)
	return visible ? (children || null) : null
}

MediaQuery.defaultProps = {above: 0, below: Infinity}

export default windowSize(withTheme(MediaQuery))
