import fdb from "./fdb";

const db = fdb.getDb();

const user = {
  getPaymentMethod: function(username) {
    return new Promise(resolve => {
      db.ref(`/users/${username}/type`).on('value', snapshot => {
        resolve(snapshot.val())
      })
    })
  },
  getBalance: function(username) {
    return new Promise(resolve => {
      db.ref(`/users/${username}/balance`).on('value', snapshot => {
        resolve(snapshot.val())
      })
    })
  },
  resetBalance: function(username) {
    return new Promise(resolve => {
      db.ref(`/users/${username}`).update({balance: 100}, () => {
        resolve()
      })
    })
  }
};

export default user;
