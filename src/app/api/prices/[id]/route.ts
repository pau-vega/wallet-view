import { COINGECKO_API_URL } from "@/constants/api";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const searchParams = request.nextUrl.searchParams;

  const id = (await params).id;
  const response = await fetch(
    `${COINGECKO_API_URL}/simple/token_price/${id}?${searchParams.toString()}`,
    {
      method: "GET",
      headers: { accept: "application/json" },
    },
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
