import fdb from "./fdb";

const db = fdb.getDb();

const payment = {
  getUnpaid: function(username) {
    return new Promise(resolve => {
      db.ref("/transactions").on("value", async snapshot => {
        const transactionObj = snapshot.val();
        const transactions = [];
        for (let tid in transactionObj) {
          const transaction = transactionObj[tid];
          if (transaction.user === username) {
            transactions.push({ tid: tid, ...transaction });
          }
        }
        transactions.sort((a, b) => a.timestamp > b.timestamp);
        const result = [];
        for (let i = 0; i < transactions.length - 1; i += 1) {
          const src = transactions[i];
          const dest = transactions[i + 1];
          if (dest.paid) {
            continue;
          }
          result.push({
            tid: dest.tid,
            user: src.user,
            source: src.location,
            destination: dest.location,
            startTimestamp: src.timestamp,
            endTimestamp: dest.timestamp,
            cost: dest.cost
          });
        }
        resolve(result);
      });
    });
  },
  pay: function(tid) {
    db.ref(`/transactions/${tid}`).update({ paid: true });
  }
};

export default payment;
