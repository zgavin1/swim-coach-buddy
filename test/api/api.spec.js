import test from 'ava';
import * as api from 'api';

// These will be async tests
// Ava has great api's for testing apis,
// with async and await keywords.
// For example:

// test('bar', async t => {
//     const bar = Promise.resolve('bar');

//     t.is(await bar, 'bar');
// });

const seedData = {
   sets: [{
     id: "abc",
     count: "3",
     dist: "300",
     interval: "4:00",
     completed: true
   },
   {
     id: "123",
     count: "5",
     dist: "100",
     interval: "1:30",
     completed: false
   }]
}

test('fetchSets gets "all" fakeData', async t => {
   const fetchData = await api.fetchSets('all');

   t.deepEqual(fetchData, seedData.sets);
})

test('fetchSets gets "completed" fakeData', async t => {
   const fetchData = await api.fetchSets('completed');

   t.deepEqual(fetchData, [seedData.sets[0]]);
})

test('fetchSets gets "active" fakeData', async t => {
   const fetchData = await api.fetchSets('active');

   t.deepEqual(fetchData, [seedData.sets[1]]);
})

test('addSet builds an active set object and returns it', async t => {
   const set = await api.addSet("5", "50", "1:00");

   t.deepEqual(set.count, "5");
   t.deepEqual(set.dist, "50");
   t.deepEqual(set.interval, "1:00");
   t.truthy(set.id);
   t.false(set.completed);
})

test('toggleSet gets a set by id and toggles the completed property, returns it', async t => {
   const id = "123";
   const currentCompleted = seedData.sets[1].completed;
   const set = await api.toggleSet(id);

   t.not(set.completed, currentCompleted);
})

// Hard to test removeSet currently
// Because its effect is only visible in the fake database
test('removeSet takes an id, removes set with that id from the array, returns the id', async t => {
   const removeId = "123";
   const removalOutput = await api.removeSet(removeId);

   t.deepEqual(removalOutput.id, removeId)
})

