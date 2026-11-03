import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Facts } from "@/components/Facts";
import { VersionOneTeaser } from "@/components/VersionOne";
import { HowItWorksTeaser } from "@/components/HowItWorks";
import { TopicTeaser } from "@/components/TopicTeaser";
import { Faq } from "@/components/Faq";
import { features } from "@/content/fylmkit";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Facts />
      <VersionOneTeaser />
      <HowItWorksTeaser />
      <TopicTeaser
        pill={features.pill}
        title={features.title}
        body={features.summary}
        href={features.href}
        cta="See all features"
        image={features.image}
        reverse
      />
      <Faq />
    </PageShell>
  );
}
