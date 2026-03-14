import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("http://localhost:3000", 302);
}

export async function HEAD() {
  return NextResponse.redirect("http://localhost:3000", 302);
}