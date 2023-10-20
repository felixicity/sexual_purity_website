import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import Gallery from "@/components/Gallery";
import Testimonies from "@/components/Testimonies";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import { quotes, testimonies } from "@/quotes.js";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="my-16">
        <p className=" container max-w-[700px] text-lg text-grey mx-auto">
          Purity is so important that God takes it as a priority to help young
          adults aspire and live their lives for the purpose for which they're
          called.
        </p>
        <div className="my-32">
          <Quotes quotes={quotes} />
        </div>
      </section>
      <section className="my-32">
        <Gallery />
      </section>
      <section className="my-32 ml-8">
        <Testimonies testimonies={testimonies} />
      </section>
      <section className="my-32">
        <Blog />
      </section>
      <section className="my-32">
        <ContactForm />
      </section>
      <section className="my-32">
        <FAQ />
      </section>
    </>
  );
}
