import { get, ref, set } from "firebase/database";
import { database } from "./firebase";

// Save to firebase database (persist)
export const saveToFirebaseDatabase = (state, uid) => {
  const databaseReference = ref(database, `engagements/${uid}`);
  set(databaseReference, state)
    .then((res) => res)
    .catch((error) => {
      console.log("save err ", error);
    });
};

export const loadFromFirebaseDatabase = async (uid) => {
  const databaseReference = ref(database, `engagements/${uid}`);

  await get(databaseReference)
    .then((snapshot) => {
      if (snapshot.exists()) console.log({ snapshot: snapshot.val() });
      else console.log("No data available");
    })
    .catch((error) => console.log("load err ", error));
};
