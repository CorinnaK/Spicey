import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("spices.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    // the transaction method ensures that the entire query is executed at once - and if any part fails the query is rolled back.
    db.transaction((tx) => {
      // Exectute take 4 argurments - sql query, array of argurments, function success (recieves query, result ), function error (query, error)
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS user_spices (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, amount INTEGER )",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertSpice = (name, description, amount) => {
  const promise = new Promise((resolve, reject) => {
    // the transaction method ensures that the entire query is eexecuted at once - and if any part fails the query is rolled back.
    db.transaction((tx) => {
      // Exectute take 4 argurments - sql query, array of argurments, function success (recieves query, result ), function error (query, error)
      tx.executeSql(
        "INSERT INTO user_spices (name, description, amount) VALUES (?, ?, ?)",
        [name, description, amount],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchSpices = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * from user_spices"),
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};
