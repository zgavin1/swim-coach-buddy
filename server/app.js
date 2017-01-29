// import { v4 } from 'node-uuid';
var express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })


//
// export const fetchSets = (filter) =>
//
//   app.get('/sets', function (req, res) {
//     switch (filter) {
//       case 'all':
//         return fakeData.sets
//       case 'completed':
//         return fakeData.sets.filter(s=>s.completed);
//       case 'active':
//         return fakeData.sets.filter(s=>!s.completed);
//       default:
//         throw new Error("Unknown filter.");
//     }
//   });
//
// export const addSet = (count, dist, interval) =>
//   const set = {
//     id: v4(),
//     count,
//     dist,
//     interval,
//     completed: false
//   };
//   app.post('/sets', function () {
//
//   });
//   delay(500).then(() => {
//     fakeData.sets.push(set);
//     return set;
//   });
//
// export const toggleSet = (id) =>
//   delay(500).then(() => {
//     const set = fakeData.sets.find(s => s.id === id);
//     set.completed = !set.completed;
//     return set;
//   });
//
// export const removeSet = (id) =>
//   delay(500).then(() => {
//     const set = fakeData.sets.find(s => s.id === id);
//     fakeData.sets = fakeData.sets.filter(s => s.id !== id);
//     return set;
//   })
