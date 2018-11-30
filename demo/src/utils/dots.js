const dots = ({hover = 'white'}) =>`
	&:before, &:after{
		transition: 0.2s all;
		content: '';
		background: currentColor;
		position: absolute;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 1px;
		transform: rotate(45deg);
		transform-origin: center;
	}
	&:before{
		top: -0.25rem;
		left: 0.25rem;
	}
	&:after{
		bottom: -0.25rem;
		right: 0.25rem;
	}
	&:focus-within, &:hover, &:active{
		border-style: solid;
		color: ${hover};
		z-index: 1;
		&:before{
			transform: rotate(45deg) translateY(11.5px);
		}
		&:after{
			transform: rotate(45deg) translateY(-11.5px);
		}
	}
`

export default dots
