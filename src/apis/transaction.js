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
  },
  getHitory: function(username) {
    return new Promise(async resolve => {
      const transactions = await this.getAll(username);
      transactions.sort((a, b) => a.timestamp > b.timestamp);
      let result = [];
      for (let i = 0; i < transactions.length - 1; i += 2) {
        const src = transactions[i];
        const dest = transactions[i + 1];
        result.push({
          user: src.user,
          source: src.location,
          destination: dest.location,
          startTimestamp: src.timestamp,
          endTimestamp: dest.timestamp,
          cost: Math.round(Math.random() * 101)
        });
      }
      resolve(result);
    });
  }
};

export default transaction;
