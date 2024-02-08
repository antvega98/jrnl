import * as SQLite from "expo-sqlite";

export default class Database {
  constructor() {
    this.db = SQLite.openDatabase("db.db");
    this.db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists entries (id integer primary key not null, value text);"
      );
    });
  }

  getItems() {
    this.db.transaction((tx) => {
      tx.executeSql(`select * from entries;`, [], (_, { rows: { _array } }) =>
        console.log("Retrieving items: ", _array)
      );
    });
  }

  setItem(newEntry) {
    this.db.transaction((tx) => {
      tx.executeSql("insert into entries (value) values (?)", [newEntry]);
    });

    this.getItems();
  }
}
