import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GridingOptions } from 'types'

type ProviderProps = GridingOptions & { children: React.ReactChild }

const Provider = ({ children, columns, breakpoints }: ProviderProps) => (
	<ThemeProvider theme={{ griding: { columns, breakpoints } }}>
		{children}
	</ThemeProvider>
)

Provider.defaultProps = {
	columns: 12,
	breakpoints: {
		xs: { width: 0, gutter: 16 },
		sm: { width: 480, gutter: 24 },
		md: { width: 768, gutter: 32 },
		lg: { width: 992 },
		xg: { width: 1280 },
	},
} as GridingOptions

export default Provider
