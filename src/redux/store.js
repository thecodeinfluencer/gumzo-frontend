/* eslint-disable no-console */
import {
  loadFromFirebaseDatabase,
  saveToFirebaseDatabase,
} from '../firebase/database';

// Save to local storage (persist)
const saveToLocalStorage = (state, uid) => {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem(`${'eyuv2gd3tdftuitkckyr'}`, stringState);
    saveToFirebaseDatabase(state, uid);
  } catch (err) {
    console.log(err);
  }
};

// Load from local storage
const loadFromLocalStorage = uid => {
  try {
    const stringState = localStorage.getItem(`${'eyuv2gd3tdftuitkckyr'}`);
    const { snapshot } = loadFromFirebaseDatabase(uid).then(res => res);
    const result = snapshot || JSON.parse(stringState);

    if (stringState === null) return undefined;
    return result;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export { loadFromLocalStorage, saveToLocalStorage };
