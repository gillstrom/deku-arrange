/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	bottom: {
		type: 'boolean'
	},
	equal: {
		type: 'boolean'
	},
	gutter: {
		type: 'boolean'
	},
	middle: {
		type: 'boolean'
	}
};

const render = ({props}) => {
	const {bottom, children, equal, gutter, middle} = props;
	const classes = {
		'Arrange': true,
		'Arrange--bottom': bottom,
		'Arrange--equal': equal,
		'Arrange--middle': middle,
		'Arrange--withGutter': gutter
	};

	return (
		<div class={classes}>
			{children}
		</div>
	);
};

export default {propTypes, render};
