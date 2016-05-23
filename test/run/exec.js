import test from 'ava'

const run = require('../../src/run/exec')

test.before(()=> {
  process.chdir('../fixtures/test-api')
})

test('Calls the handler and returns a resolved promise', (t) => {
  return run({ name: 'pass', silent: true }).then((res)=>{
    t.is(res, 'success!')
    t.truthy(global.env)
  })
})

test('Calls the handler and returns a rejected promise', (t) => {
  return run({ name: 'fail', silent: true }).catch((err)=>{
    t.is(err, 'failure!')
    t.truthy(global.env)
  })
})