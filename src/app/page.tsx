import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="bg-background grid min-h-dvh [grid-template-rows:auto_1fr_auto]">
      <header>
        <Header />
      </header>
      <main></main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
