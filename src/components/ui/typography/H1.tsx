import { cn } from "@/lib/utils";

interface H1Props extends React.PropsWithChildren {
  className?: string;
}

export function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center font-serif text-4xl font-extrabold tracking-wider text-balance",
        className,
      )}
    >
      {children}
    </h1>
  );
}
