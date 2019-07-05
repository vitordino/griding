import React from 'react'
import styled from 'styled-components'
import { LiveEditor } from 'react-live'
import Window from './Window'

const StyledLiveEditor = styled(LiveEditor)`
	background: none;
	overflow: scroll;
	tab-size: 2;

	& > textarea,
	& > pre {
		outline: none;
		padding: 0 !important;
	}
	& > pre {
		user-select: none !important;
	}
`

const ImportLine = (props: React.ComponentProps<'pre'>) => (
	<pre {...props}>
		<span className='keyword'>import</span>
		<span className='plain'> </span>
		<span className='punctuation'>{'{'}</span>
		<span className='plain'> Provider</span>
		<span className='punctuation'>,</span>
		<span className='plain'> Row</span>
		<span className='punctuation'>,</span>
		<span className='plain'> Cell </span>
		<span className='punctuation'>{'}'}</span>
		<span className='plain'> </span>
		<span className='keyword'>from</span>
		<span className='plain'> </span>
		<span className='string'>'griding'</span>
		{'\n'}
	</pre>
)

const StyledImportLine = styled(ImportLine)`
	overflow: hidden;
	white-space: pre-wrap;
	color: rgb(197, 200, 198);
	.punctuation {
		opacity: 0.7;
	}
	.keyword {
		color: rgb(209, 148, 158);
	}
	.string {
		color: rgb(245, 184, 61);
	}
`

type EditorProps = React.ComponentProps<typeof StyledLiveEditor>
const Editor = (props: EditorProps) => (
	<Window background='#000' inactive='#333' active='#fff'>
		<StyledImportLine />
		<StyledLiveEditor {...props} />
	</Window>
)

export default Editor
