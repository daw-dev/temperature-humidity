import { TemperatureHumidity } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const database = TemperatureHumidity();
  const collection = database.collection("readings");
  const readings = await collection.find().toArray();
  return NextResponse.json(readings);
}

export async function POST(request: NextRequest) {
  const database = TemperatureHumidity();
  const collection = database.collection("readings");
  const reading = await request.json();
  await collection.insertOne(reading);
  return NextResponse.json(reading);
}