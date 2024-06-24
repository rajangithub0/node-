const { MongoClient } = require("mongodb");

async function main() {
  const url =
    "mongodb+srv://rajanrana6@admin:rajanrana6@clusterparrtickal.7azhrkj.mongodb.net/?retryWrites=true&w=majority&appName=clusterparrtickal";

  const client = new MongoClient(url);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
async function listDatabases(client) {
  dbList = await client.db().admin().listDatabases;
  console.log("available databases ");
  dbList.databases.foreach((db) => {
    console.log(`-${db.name}`);
  });
}

main().catch(console.error);
