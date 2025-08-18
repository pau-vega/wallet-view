import { COINGECKO_API_URL } from "@/constants/api";

const BASE_URL = COINGECKO_API_URL;

export async function coingeckoFetch<T>(
  endpoint: string,
  searchParams?: Record<string, string>,
) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  if (searchParams) {
    Object.entries(searchParams).forEach(([k, v]) =>
      url.searchParams.append(k, v),
    );
  }

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`CoinGecko error: ${res.status}`);
  return res.json() as Promise<T>;
}
