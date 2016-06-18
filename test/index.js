// test/index.js
import test from 'ava';
import * as setActions from 'actions/setActions'

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

// things to test:
// schema design from normalizr
// maybe database configuration?

// test('addSet', async t =>  {
//    const setAction = await setActions.addSet("1", "1", "1:00")
   
//    t.is(setAction, "ADD_SET_SUCCESS")
// })