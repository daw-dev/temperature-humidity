import { Db, MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const client = await new MongoClient(MONGO_URI ?? "").connect();

export function TemperatureHumidity() {
  return client.db("TemperatureHumidity");
}