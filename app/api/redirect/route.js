import { NextResponse } from "next/server";

export async function GET() {

  const headers = new Headers();

  headers.set("Location", "google as");
  headers.set("X-Test", "pentest");
  headers.set("X-Powered-By", "Vignesh");

  return new Response(null, {
    status: 302,
    headers: headers
  });

}


export async function HEAD() {

  const headers = new Headers();

  headers.set("Location", "google as");
  headers.set("X-Test", "pentest");
  headers.set("X-Powered-By", "Vignesh");

  return new Response(null, {
    status: 302,
    headers: headers
  });

}