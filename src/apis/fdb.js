import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const fdb = {
  getDb: function() {
    return db;
  }
};

export default fdb;
