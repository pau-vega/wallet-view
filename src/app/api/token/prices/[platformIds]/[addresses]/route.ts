import { getTokenFiatPricesByAddresses } from "@/lib/coingecko/price";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ addresses: string; platformIds: string }> },
) {
  const { addresses: contract_addresses, platformIds } = await params;
  const { searchParams } = request.nextUrl;

  const vs_currencies = searchParams.get("vs_currencies");

  if (!vs_currencies || !contract_addresses || !platformIds) {
    return new Response("Missing required parameters", { status: 400 });
  }
  const response = await getTokenFiatPricesByAddresses({
    id: platformIds,
    contract_addresses,
    vs_currencies,
    include_24hr_change: "true",
    include_24hr_vol: "true",
    include_last_updated_at: "true",
    include_market_cap: "true",
    precision: "18",
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
