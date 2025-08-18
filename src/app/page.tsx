import { Header } from "@/components/header";
import { NativeTokenBalance } from "@/components/native-token-balance";

export default function Home() {
  return (
    <div className="grid min-h-dvh [grid-template-rows:auto_1fr_auto]">
      <header>
        <Header />
      </header>
      <main>
        <NativeTokenBalance />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
