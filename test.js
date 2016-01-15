import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import {Arrange, ArrangeFill, ArrangeFit, ArrangeRow} from './';

test('Arrange', () => {
	const mock = componentMock(Arrange);
	const el = mock.render({props: {
		gutter: true
	}});

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Arrange');
	assertElement.hasClass(el, 'Arrange--withGutter');
});

test('ArrangeFill', () => {
	const mock = componentMock(ArrangeFill);
	const el = mock.render();

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Arrange-sizeFill');
});

test('ArrangeFit', () => {
	const mock = componentMock(ArrangeFit);
	const el = mock.render();

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Arrange-sizeFit');
});

test('ArrangeRow', () => {
	const mock = componentMock(ArrangeRow);
	const el = mock.render();

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Arrange-row');
});
