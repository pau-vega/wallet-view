import { getAssetsPlatformsList } from "@/lib/coingecko/platform";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ chain: string }> },
) {
  const { chain } = await params;

  const response = await getAssetsPlatformsList({});

  const chainIdsArray = chain?.split(",").map(Number);
  const filteredResponse = response.find((platform) =>
    chainIdsArray?.includes(platform.chain_identifier),
  );

  return new Response(JSON.stringify(filteredResponse), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
