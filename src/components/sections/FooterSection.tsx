import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { FooterModule } from "@/types/home";

type FooterSectionProps = {
  data?: FooterModule;
};

export default function FooterSection({ data }: FooterSectionProps) {
  const copyright =
    data?.copyright || `© ${new Date().getFullYear()} Modern Next Landing`;
  const tagline = data?.tagline || "Built with Next.js, Tailwind CSS and TypeScript";

  return (
    <footer className="border-t border-ink-100 py-8">
      <Container>
        <Reveal>
          <div className="flex min-w-0 flex-col gap-3 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{copyright}</p>
            <p>{tagline}</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
