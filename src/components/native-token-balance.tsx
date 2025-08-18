"use client";

import { useAccount, useBalance } from "wagmi";
import { Typography } from "./ui/typography";
import { CURRENCY_IDS, CURRENCY_SYMBOLS } from "@/types/currencies";
import { useEffect, useMemo, useState } from "react";
import { usePriceApi } from "@/hooks/usePriceApi";
import { formatUnits } from "viem";
import { cn } from "@/lib/utils";
import { usePlatformApi } from "@/hooks/usePlatformApi";
import { NumberTicker } from "./magicui/number-ticker";
import { Card, CardContent } from "./ui/card";

export function NativeTokenBalance() {
  const { address } = useAccount();
  const { getCurrentPlatform } = usePlatformApi();

  const { data: balance } = useBalance({ address });
  const formattedBalance = useMemo(
    () => balance && formatUnits(balance.value, balance.decimals).slice(0, -10),
    [balance],
  );
  const { getFiatPriceByPlatformId } = usePriceApi();
  const [price, setPrice] = useState<number>(0);
  const [priceVariationPercentage, setPriceVariationPercentage] =
    useState<number>(0);

  const nativeTokenBalance = useMemo(() => {
    if (!balance) return 0;
    const formattedBalance = formatUnits(balance.value, balance.decimals);

    const formattedPrice = price * Number(formattedBalance);
    return Number(formattedPrice.toFixed(2));
  }, [balance, price]);

  useEffect(() => {
    getCurrentPlatform().then((platform) => {
      getFiatPriceByPlatformId({
        platformId: platform.native_coin_id,
        currencies: [CURRENCY_IDS.USD],
      }).then((price) => {
        setPrice(price[platform.native_coin_id].usd);
        setPriceVariationPercentage(
          price[platform.native_coin_id].usd_24h_change!,
        );
      });
    });
  }, [getFiatPriceByPlatformId, getCurrentPlatform]);

  return (
    <Card className="shadow-2xs">
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <Typography variant="large" className="font-normal">
            Balance:
          </Typography>
          <Typography variant="large">
            {formattedBalance} {balance?.symbol}
          </Typography>
        </div>
        <div className="flex items-end gap-2">
          <Typography variant="large" className="text-5xl">
            {CURRENCY_SYMBOLS.USD}{" "}
            <NumberTicker
              value={nativeTokenBalance}
              decimalPlaces={2}
              className="text-5xl font-semibold"
            />
            <Typography
              variant="small"
              className={cn(
                priceVariationPercentage > 0
                  ? "text-green-500"
                  : "text-red-500",
              )}
            >
              {priceVariationPercentage > 0 ? "+" : ""}
              {priceVariationPercentage.toFixed(2)}% (24h)
            </Typography>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
