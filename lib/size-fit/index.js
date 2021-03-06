/** @jsx dom */
import dom from 'magic-virtual-element';

const render = ({props}) => {
	const {children} = props;
	const classes = {
		'Arrange-sizeFit': true
	};

	return (
		<div class={classes}>
			{children}
		</div>
	);
};

export default {render};
