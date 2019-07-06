import fdb from "./fdb";

const db = fdb.getDb();

const user = {
  getPaymentMethod: function(username) {
    return new Promise(resolve => {
      db.ref(`/users/${username}/type`).on('value', snapshot => {
        resolve(snapshot.val())
      })
    })
  }
};

export default user;
