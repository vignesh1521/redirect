import { NextResponse } from "next/server";



export async function HEAD() {
  return new Response("Custom error occurred", {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}