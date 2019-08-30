import React from 'react'
import { Provider as ThemeProvider } from 'etymos'
import { Theme } from 'types'

type ProviderProps = Theme & { children: React.ReactChild }

const Provider = ({ children, columns, breakpoints }: ProviderProps) => (
	<ThemeProvider columns={columns} breakpoints={breakpoints}>
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
} as Theme

export default Provider
