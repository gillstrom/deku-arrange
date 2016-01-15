# deku-arrange [![Build Status](https://travis-ci.org/gillstrom/deku-arrange.svg?branch=master)](https://travis-ci.org/gillstrom/deku-arrange)

> Arrange component for Deku. To be used with [SUIT CSS components-arrange](https://github.com/suitcss/components-arrange/).


## Install

```
$ npm install --save deku-arrange
```


## Usage

```js
import {Arrange, ArrangeFill, ArrangeFit} from 'deku-arrange';

const render = () => {
	return (
		<Arrange gutter middle>
			<ArrangeFit>
				Foo
			</ArrangeFit>
			<ArrangeFill>
				Bar
			</ArrangeFill>
		</Arrange>
	);
};

export default {render};
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
