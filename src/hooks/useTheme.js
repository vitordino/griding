import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const useTheme = () => useContext(ThemeContext)

export default useTheme
