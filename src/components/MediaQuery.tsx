import { useMediaQuery } from 'etymos'
import { Constraints, renderProps } from 'types'

type MediaQueryProps = Constraints & renderProps<boolean>

const MediaQuery = (props: MediaQueryProps) => {
	const { render, children = render, ...constraints } = props
	const visible = useMediaQuery(constraints)
	if (typeof children === 'function') return children(visible)
	return (visible && children) || null
}

MediaQuery.defaultProps = { above: 0, below: Infinity }

export default MediaQuery
