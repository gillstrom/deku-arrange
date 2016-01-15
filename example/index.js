/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import {Arrange, ArrangeFill, ArrangeFit} from '../lib';

require('./index.css');

const render = () => {
	return (
		<Arrange gutter>
			<ArrangeFit>
				<div class='Foo'>
					Foo
				</div>
			</ArrangeFit>
			<ArrangeFit>
				<div class='Foo'>
					Foo
				</div>
			</ArrangeFit>
			<ArrangeFill>
				<div class='Bar'>
					Bar
				</div>
			</ArrangeFill>
		</Arrange>
	);
};

const App = {render};

r(tree(<App/>), document.body);
