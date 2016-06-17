import { Schema, arrayOf } from 'normalizr';

export const set = new Schema('sets');
export const arrayOfSets = arrayOf(set);