# Function Batcher

A simple utility for batch executing a group of functions.

## Usage

```javascript
// ES module is in /src/function-batcher.js
import FunctionBatcher from 'function-batcher'
```

```javascript
<script type='text/javascript' src='/dist/function-batcher.js'></script>
<script type='text/javascript' src='/dist/function-batcher.min.js'></script>
```

```javascript
function f() {
  console.log(1)
}

function g() {
  console.log(2)
}

batch = FunctionBatcher()

batch.add(f)
batch.add(g)
batch.run()
// => 1
//    2

batch.remove(f)
batch.run()
// => 2
```

## License

[MIT](LICENSE.md)
