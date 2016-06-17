import { v4 } from 'node-uuid';

// Fake in-memory implmenation of something
// that would be return from a call to a REST server


const fakeData = {
   sets: [{
     id: v4(),
     count: "3",
     dist: "300",
     interval: "4:00",
     completed: false
   },
   {
     id: v4(),
     count: "5",
     dist: "100",
     interval: "1:30",
     completed: false
   }]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchSets = (filter) =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error("Boom");
    }
    switch (filter) {
      case 'all':
        return fakeData.sets
      case 'completed':
        return fakeData.sets.filter(s=>s.completed);
      case 'active':
        return fakeData.sets.filter(s=>!s.completed);
      default:
        throw new Error("Unknown filter.");
    }
  });