import { NextResponse } from "next/server";


export async function GET() {
  return new Response("Custom error occurred", {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

export async function HEAD() {
  return new Response("Custom error occurred", {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}