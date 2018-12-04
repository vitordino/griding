import React from 'react'
import {ThemeProvider} from 'styled-components'

const Provider = ({children, columns, breakpoints}) => (
	<ThemeProvider theme={{griding: {columns, breakpoints}}}>
		{children}
	</ThemeProvider>
)

Provider.defaultProps = {
	columns: 12,
	breakpoints: {
		xs: { width:  '0rem', gutter: '1rem' },
		sm: { width: '30rem', gutter: '1.5rem' },
		md: { width: '48rem', gutter: '2rem' },
		lg: { width: '62rem', gutter: '2rem' },
		xg: { width: '80rem', gutter: '2.5rem' },
	}
}

export default Provider
