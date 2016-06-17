import { v4 } from 'node-uuid';

// Fake in-memory implmenation of something
// that would be return from a call to a REST server


const fakeData = {
   sets: [{
     id: v4(),
     count: "3",
     dist: "300",
     interval: "4:00",
     completed: true
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

export const addSet = (count, dist, interval) =>
  delay(500).then(() => {
    const set = {
      id: v4(),
      count,
      dist,
      interval,
      completed: false
    };
    fakeData.sets.push(set);
    return set;
  });

export const toggleSet = (id) =>
  delay(500).then(() => {
    const set = fakeData.sets.find(s => s.id === id);
    set.completed = !set.completed;
    return set;
  });

export const removeSet = (id) =>
  delay(500).then(() => {
    fakeData.sets = fakeData.sets.filter(s => s.id !== id);
    return {id: id};
  })

