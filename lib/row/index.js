/** @jsx dom */
import dom from 'magic-virtual-element';

const render = ({props}) => {
	const {children} = props;
	const classes = {
		'Arrange-row': true
	};

	return (
		<div class={classes}>
			{children}
		</div>
	);
};

export default {render};
