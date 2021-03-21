import path from "path";
import knex from "knex";

const dbPath = path.resolve(__dirname, "./database.sqlite");

export const knex = knex({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema.hasTable("test").then((exists) => {
  if (!exists) {
    const testSchema = knex.schema.createTable("test", (table) => {
      table.increments("test_id").primary();
      table.string("name");
    });
    return testSchema
      .then(() => {
        console.log("Test Table Created");
      })
      .catch((error) => {
        console.error(`There was an error creating table: ${error}`);
      });
  }
});
