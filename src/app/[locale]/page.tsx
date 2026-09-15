import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { LeadCapture } from "@/components/sections/LeadCapture";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="w-full pt-16 sm:pt-20 flex-grow">
        <Hero />
        <About />
        <Services />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
