import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("jrnl");

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists entries (id integer primary key not null, value text);"
        );
      },
      reject,
      resolve
    );
  });
}

export async function getItems() {
  return new Promise((resolve, _) => {
    db.transaction((tx) => {
      tx.executeSql(`select * from entries;`, [], (_, { rows: { _array } }) => {
        resolve(_array);
      });
    });
  });
}

export async function setItem(newEntry) {
  db.transaction((tx) => {
    tx.executeSql("insert into entries (value) values (?)", [newEntry]);
  });
}
