import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("hello", 302);
}

export async function HEAD() {
  return NextResponse.redirect("hello", 302);
}