import { Header } from "./Header";
import { Footer } from "./Footer";
import { Waitlist } from "./Waitlist";

export function PageShell({
  children,
  showWaitlist = true,
}: {
  children: React.ReactNode;
  showWaitlist?: boolean;
}) {
  return (
    <main className="flex min-h-full flex-col bg-[var(--bg)]">
      <Header />
      {children}
      {showWaitlist ? <Waitlist /> : null}
      <Footer />
    </main>
  );
}
