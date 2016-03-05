# node-unicornpass

[Unicornpass](https://github.com/carmebar/unicornpass) library for Node.

> Note: uses SHA512 instead of SHA1

## Usage

```js
var unicornpass = require('unicornpass');

var password = 'abc'; // Stronger password recommended
var salt = 'random value'; // Per-installation random value

unicornpass(salt + password);
// Returns an object with backgroundColor and backgroundImage
```

## License

MIT
