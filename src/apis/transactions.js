import axios from "axios";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const transaction = {
  getAll: username => {
    return new Promise(resolve => {
      db.ref("/transactions").on("value", async snapshot => {
        const transactions = snapshot.val();
        const result = [];
        for (let tid in transactions) {
          const transaction = transactions[tid];
          if (transaction.user === username) {
            result.push(transaction);
          }
        }
        resolve(result);
      });
    });
  }
};

export default transaction;
