import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <BackNav />
      {children}
      <Footer />
    </main>
  );
}
