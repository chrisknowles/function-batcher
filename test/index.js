import test from 'tape'
import FunctionBatcher from '../src/function-batcher.js'

let resultX = ''
let resultY = ''

test('add', t => {
  const fb = FunctionBatcher()
  const x = () => resultX = 'xxx'
  const y = () => resultY = 'yyy'
  fb.add(x)
  fb.add(y)
  fb.run()
  t.equal(resultX, 'xxx', 'Added function')
  t.equal(resultY, 'yyy', 'Added function')
  resultX = ''
  resultY = ''
  t.end()
})

test('removed', t => {
  const fb = FunctionBatcher()
  const x = () => resultX = 'xxx'
  const y = () => resultY = 'yyy'
  fb.add(x)
  fb.add(y)
  fb.remove(x)
  fb.run()
  t.equal(resultX, '', 'Removed function')
  t.equal(resultY, 'yyy', 'Added function')
  resultX = ''
  resultY = ''
  t.end()
})
